"use client";

import React, { useEffect, Suspense, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import "../styles/page.scss";
import { useProgress, Loader } from "@react-three/drei";
import Swiper from "@/components/Swiper";

import AboutSection from "@/components/AboutSection";
import HomeSection from "@/components/HomeSection";
import SponsorSection from "@/components/SponsorSection";
import DataTable from "@/components/Table";

const fetchDataFromAPI = async () => {
  try {
    const eventResponse = await fetch("/api/TBA/Events", {});
    if (eventResponse.ok) {
      if (eventResponse) {
        const eventData = await eventResponse.json();

        const data = {};

        const fetchPromises = eventData.map(async (item) => {
          try {
            const anotherResponse = await fetch(
              `/api/TBA/PerformanceAt/${item.key}`,
              {}
            );
            if (anotherResponse.ok) {
              const anotherData = await anotherResponse.json();

              // Combine the data into the combinedData object
              data[item.key] = {
                eventData: anotherData,
                city: item.city,
                year: item.year,
              };
            } else {
              console.error(
                `Failed to fetch data for event code ${item.event_code}`
              );
            }
          } catch (error) {
            console.error(
              `Error fetching data for event code ${item.event_code}:`,
              error
            );
          }
        });

        await Promise.all(fetchPromises);

        return data;
      }
    } else {
      console.error("Failed to fetch event data");
    }
  } catch (err) {
    console.error(err);
  }
};

const extractData = (combinedData) => {
  const extractedData = [];
  let i = 0;
  // Iterate through each event in combinedData
  for (const eventCode in combinedData) {
    const eventData = combinedData[eventCode];

    // Extract data from the sub-objects

    // Extract required fields and construct the o bject
    if (
      eventData.eventData != null &&
      eventData.eventData.qual != null &&
      eventData.eventData.qual.status != "not_started"
    ) {
      const obj = {
        key: eventData.year + i,
        year: eventData.year,
        name: eventData.city,
        wins: eventData.eventData.qual.ranking.record.wins,
        losses: eventData.eventData.qual.ranking.record.losses,
        rank: eventData.eventData.qual.ranking.rank,
      };
      i++;
      // Add the constructed object to the array
      extractedData.push(obj);
    } else {
      continue;
    }
  }

  return extractedData;
};

export default function Home() {
  const { active, progress } = useProgress();
  const container = useRef();

  const [extractedDataGlobal, setExtractedDataGlobal] = useState(null);

  useEffect(() => {
    fetchDataFromAPI()
      .then((combinedData) => {
        // Extract data from combinedData
        setExtractedDataGlobal(extractData(combinedData));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <main className="main" ref={container}>
      <Suspense fallback={<Loader />}>
        {/* <HomeCanvas /> */}
        <Navbar />
        <HomeSection />
        <AboutSection />

        <section className="datatable section">
          <DataTable extractedDataGlobal={extractedDataGlobal} />
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
