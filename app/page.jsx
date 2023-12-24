"use client";

import Navbar from "@/components/Navbar";
import "../styles/page.scss";
import React, { useEffect, Suspense, useRef, lazy } from "react";
import { useProgress, Loader } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Swiper from "@/components/Swiper";

import AboutSection from "@/components/AboutSection";
import HomeCanvas from "@/components/HomeCanvas";
import HomeSection from "@/components/HomeSection";
import SponsorSection from "@/components/SponsorSection";

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
      setTimeout(() => {
        afterLoad();
      }, 3000);
    }
  }, [active, afterLoad]);

  return (
    <main className="main" ref={container}>
      <Suspense fallback={<Loader />}>
        <HomeCanvas />
        <Navbar />
        <HomeSection />
        <section className="section" id="swipe">
          <Swiper />
        </section>
        <AboutSection />
        <section className="favorite section" id="favorite"></section>
        <SponsorSection />
      </Suspense>
    </main>
  );
}
