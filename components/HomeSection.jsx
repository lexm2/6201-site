import Placeholder from "@/public/Placeholder.webp";
import { Card, CardFooter, CardHeader, Button } from "@nextui-org/react";
import Image from "next/image";
import styles from "@/styles/HomeSection.module.css";

const imageStyle = {
  width: "100vw",
};

const HomeSection = () => (
  <section className={styles.home} id="home">
    <Card
      radius="lg"
      className={`${styles.imageContainer} w-[90vw] h-[80vh]`}
    >
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">
          What is this
        </p>
        <h4 className="text-white font-medium text-large">
          Not our team that&apos;s what
        </h4>
      </CardHeader>
      <Image fill={true} className="object-cover" src={Placeholder} alt="" />
      <CardFooter className="justify-between overflow-hidden py-1 absolute before:rounded-xl bottom-1 w-[calc(100%_-_8px)] ml-1 z-10">
        <Button
          className="text-tiny text-white bg-black/60"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          Event info
        </Button>
      </CardFooter>
    </Card>

    <div className="home__container container grid">
      <div className="home__content">
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
