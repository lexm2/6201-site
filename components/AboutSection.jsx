import {
  RiInformationLine,
} from "react-icons/ri";

import TextReveal from "@/components/TextReveal";

const AboutSection = () => (
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
);

export default AboutSection;
