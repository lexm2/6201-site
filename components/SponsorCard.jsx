import React, { useRef } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  CardFooter,
  Link,
} from "@nextui-org/react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";
import { Image } from "@nextui-org/react";
import styles from "../styles/SponsorSection.module.css";

const SponsorCard = ({ imageSrc, href }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      whileHover={{ scale: 1.05 }}
      className={styles.sponsorCard}
    >
      <Link href={href} isExternal>
        <Card isPressable>
          <CardBody css={{ p: 0 }}>
            <Image
              isBlurred
              src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
              alt="NextUI Album Cover"
            />
          </CardBody>
        </Card>
      </Link>
    </motion.div>
  );
};

export default SponsorCard;
