import {
  RiTwitterLine,
  RiFacebookBoxLine,
  RiInstagramLine,
  RiInformationLine,
} from "react-icons/ri";

const SocialLinks = () => (
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
);

export default SocialLinks;
