import React from "react";
import SponsorCard from "./SponsorCard";
import styles from "../styles/SponsorSection.module.css";


const SponsorSection = () => {
  const sponsors = [
    { imageSrc: "public/test.jpg", href: "https://google.com" },
    { imageSrc: "public/test.jpg", href: "https://google.com" },
    { imageSrc: "public/test.jpg", href: "https://google.com" },
  ];

  return (
    <section className={styles.sponsor__container}>
      {sponsors.map((sponsor, index) => (
        <SponsorCard key={index} {...sponsor} />
      ))}
    </section>
  );
};

export default SponsorSection;