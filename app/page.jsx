"use client";

import React, { useEffect, Suspense, useRef, useState } from "react";
import "../styles/page.scss";
import Sidebar from "@/components/Sidebar";
import Swiper from "@/components/Swiper";
import AboutSection from "@/components/AboutSection";
import HomeSection from "@/components/HomeSection";
import DataTable from "@/components/Table";
import Loading from "@/components/Loading";

export default function Home() {
  const container = useRef();
  const [loading, setLoading] = useState(true);
  const [loadingAnimFinished, setLoadingAnimFinished] = useState(false);

  async function delayedLoading() {
    await new Promise((resolve) => setTimeout(resolve, 4050));

    setLoading(false);
  }
  
  useEffect(() => {
    delayedLoading();

    if (loadingAnimFinished) {
      document.body.className = document.body.className.replace("loading", "");
    }
  }, [loadingAnimFinished]);

  return (
    <main className="main" ref={container}>
      {!loadingAnimFinished && (
        <Loading
          loading={loading}
          setLoadingAnimFinished={setLoadingAnimFinished}
        />
      )}
      <Suspense>
        <Sidebar />
        {/* <HomeCanvas /> */}
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
