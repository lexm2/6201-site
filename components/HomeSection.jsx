import SocialLinks from "@/components/SocialLinks";
import Image from "next/image";
import Placeholder from "../public/Placeholder.webp";

const HomeSection = () => (
  <section className="home section" id="home">
    <div className="home__container container grid">
      <div className="home__content">
        <Image src={Placeholder} fill={true} alt="Picture of the author" />
        <h1 className="home__title">
          <span>6</span>
          <span>2</span>
          <span>0</span>
          <span>1</span>
        </h1>
      </div>
    </div>
  </section>
);
export default HomeSection;
