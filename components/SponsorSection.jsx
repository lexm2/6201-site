import Image from "next/image";

const SponsorSection = () => (
  <section className="sponsor section">
    <div className="sponsor__container container grid">
      <Image src="images/sponsor-1.png" alt="image" className="sponsor__img" />
      <Image src="images/sponsor-2.png" alt="image" className="sponsor__img" />
      <Image src="images/sponsor-3.png" alt="image" className="sponsor__img" />
      <Image src="images/sponsor-4.png" alt="image" className="sponsor__img" />
    </div>
  </section>
);
export default SponsorSection;
