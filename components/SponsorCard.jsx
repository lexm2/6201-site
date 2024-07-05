import React, { useRef } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  CardFooter,
  Link,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { Image } from "@nextui-org/react";
import styles from "@/styles/SponsorSection.module.css";


const SponsorCard = ({ imageSrc, href }) => {
  const ref = useRef(null);

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="offscreen"
      whileInView="onscreen"
      variants={cardVariants}
      viewport={{ once: true, amount: 0.8 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      className={styles.sponsorCard}
    >
      <Link href={href} isExternal>
        <Card isPressable>
          <CardBody css={{ p: 0 }}>
            <Image  
              isBlurred
              src="@/public/markforged_primary_logo_w.png"
              alt="Markforged Logo"
              preload="auto"
            />
          </CardBody>
        </Card>
      </Link>
    </motion.div>
  );
};

export default SponsorCard;
