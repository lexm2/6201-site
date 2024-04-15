"use client";

import React, { useEffect, Suspense, useRef } from "react";
import Navbar from "@/components/Navbar";
import "../styles/page.scss";
import { useProgress, Loader } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Swiper from "@/components/Swiper";

import AboutSection from "@/components/AboutSection";
import HomeSection from "@/components/HomeSection";
import SponsorSection from "@/components/SponsorSection";
import DataTable from "@/components/Table"


export default function Home() {
  const { active, progress } = useProgress();
  const container = useRef();
  const { contextSafe } = useGSAP({ scope: container });

  const afterLoad = contextSafe(() => {
    var tl = gsap.timeline({
      defaults: {
        ease: "power4.inOut",
        duration: 1.5,
      },
      delay: 0.1,
      lazy: true,
    });

    tl.to(".home__title span:nth-child(1)", { x: "0px" })
      .to(".home__title span:nth-child(2)", { x: "0px" }, "<")
      .to(".home__title span:nth-child(3)", { x: "0px" }, "<")
      .to(".home__title span:nth-child(4)", { x: "0px" }, "<")
      .to(".home__social", { opacity: 1, y: "3rem" }, "<");
  });

  useEffect(() => {
    if (active === true) {
      afterLoad();
    }
  }, [active, afterLoad]);

  return (
      <main className="main" ref={container}>
        <Suspense fallback={<Loader />}>
          {/* <HomeCanvas /> */}
          <Navbar />
          <HomeSection />
          <AboutSection />

          <section className="datatable section">
            <DataTable />
            {/* <ImageComponent /> */}
          </section>
          {/* <section className="section" id="swipe">
            <Swiper />
          </section> */}
          <section className="favorite section" id="favorite"></section>
          {/* <SponsorSection /> */}
        </Suspense>
      </main>
  );
}
