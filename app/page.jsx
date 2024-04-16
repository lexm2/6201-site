"use client";

import React, { useEffect, Suspense, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import "../styles/page.scss";
import Swiper from "@/components/Swiper";
import AboutSection from "@/components/AboutSection";
import HomeSection from "@/components/HomeSection";
import SponsorSection from "@/components/SponsorSection";
import DataTable from "@/components/Table";
import Loading from "@/components/Loding"

export default function Home() {
  const container = useRef();
  const [loading, setLoading] = useState(true);
  
  async function delayedLoading() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(true);
  }
  useEffect(() => {delayedLoading()}, []);

  return (
    <main className="main" ref={container}>
      <Loading />
      <Suspense>
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
