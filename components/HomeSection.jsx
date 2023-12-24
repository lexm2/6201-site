import SocialLinks from "@/components/SocialLinks";

const HomeSection = () => (
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
        <SocialLinks />
      </div>
    </div>
  </section>
);
export default HomeSection;
