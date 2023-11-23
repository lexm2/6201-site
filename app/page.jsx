"use client";

import {
  RiTwitterLine,
  RiFacebookBoxLine,
  RiInstagramLine,
  RiInformationLine,
} from "react-icons/ri";
import Navbar from "@/components/Navbar";
import "../styles/page.scss";
import React, { useEffect, lazy } from "react";
import gsap from "gsap";
import Swiper from "@/components/Swiper";
import TextReveal from "@/components/TextReveal";
import Suspense from "react";
import Canvas from "@react-three/fiber";
import Environment from "@react-three/drei";

export default function Home() {
  useEffect(() => {
    var tl = gsap.timeline({
      // paused: true, for loading screen
      defaults: {
        ease: "power4.inOut",
        duration: 1.5,
      },
      delay: 0.1,
      lazy,
    });

    tl.to(".home__title span:nth-child(1)", { x: "0px" })
      .to(".home__title span:nth-child(2)", { x: "0px" }, "<")
      .to(".home__title span:nth-child(3)", { x: "0px" }, "<")
      .to(".home__title span:nth-child(4)", { x: "0px" }, "<")
      .to(".home__social", { opacity: 1, y: "3rem" }, "<");
  });

  return (
    <main className="main">
      <Navbar />
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content">
            <h1 className="home__title">
              <span>6</span>
              <span>2</span>
              <span>0</span>
              <span>1</span>
            </h1>
          </div>
          <div className="home__social">
            <span className="home__social-text">Follow Us</span>

            <div className="home__social-links">
              <a
                href="https://www.instagram.com/frc6201/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="home__social-link"
              >
                <i>
                  <RiInstagramLine />
                </i>
              </a>
              <a
                href="https://www.facebook.com/frc6201"
                target="_blank"
                rel="noreferrer"
                className="home__social-link"
              >
                <i>
                  <RiFacebookBoxLine />
                </i>
              </a>
              <a
                href="https://twitter.com/frc6201?lang=en"
                target="_blank"
                rel="noreferrer"
                className="home__social-link"
              >
                <i>
                  <RiTwitterLine />
                </i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="swipe">
        <Swiper />
      </section>
      <section className="about section" id="about">
        <div className="about__container container grid">
          <div className="about__data">
            <h2 className="section__title">About 6201</h2>

            <TextReveal
              classes="about__description"
              text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.`}
            />

            <a href="#" className="button">
              Learn More <RiInformationLine />
            </a>
          </div>
        </div>
      </section>

      <section className="favorite section" id="favorite"></section>

      <section className="section"></section>

      <section className="sponsor section">
        <div className="sponsor__container container grid">
          {/* <img
            src="images/sponsor-1.png"
            alt="image"
            className="sponsor__img"
          />
          <img
            src="images/sponsor-2.png"
            alt="image"
            className="sponsor__img"
          />
          <img
            src="images/sponsor-3.png"
            alt="image"
            className="sponsor__img"
          />
          <img
            src="images/sponsor-4.png"
            alt="image"
            className="sponsor__img"
          /> */}
        </div>
      </section>
    </main>
  );
}
