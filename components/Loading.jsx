import styles from "../styles/Loading.module.css";
import { motion, AnimatePresence, animate } from "framer-motion";
import { useEffect, useState } from "react";

const Loading = ({ loading }) => {

  const [showFirstAnimation, setShowFirstAnimation] = useState(false);
  const [showSecondAnimation, setShowSecondAnimation] = useState(false);

  useEffect(() => {
    setShowFirstAnimation(true);

    if (loading === false) {
      setShowSecondAnimation(true);
      setShowFirstAnimation(false);
    }

  }, [loading]);

  const draw = {
    initial: { pathLength: 0, opacity: 0 },
    animate: () => {
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { type: "spring", duration: 2, bounce: 0 },
          opacity: { duration: 0.01 },
        },
      };
    },
  };

  const drawAndRemove = {
    initial: { pathLength: 0, opacity: 0 },
    animate: () => {
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: {
            type: "spring",
            duration: 2,
            bounce: 0,
            repeat: 1,
            repeatType: "reverse",
          },
          opacity: {
            duration: 0.01,
            repeat: 1,
            repeatType: "reverse",
            repeatDelay: 4,
          },
        },
      };
    },
  };

  const drawHalf = {
    initial: { pathLength: 0, opacity: 0 },
    animate: () => {
      return {
        pathLength: 0.5,
        opacity: 1,
        transition: {
          pathLength: { type: "spring", duration: 2, bounce: 0 },
          opacity: { duration: 0.01 },
        },
      };
    },
  };

  const scaleRadius = {
    initial: { r: 5 },
    animate: () => {
      return {
        r: 150,
        transition: {
          r: { duration: 3, type: "spring", duration: 3, bounce: 0 },
        },
      };
    },
  };

  return (
    <motion.svg
      className={styles.backround}
      width="100vw"
      height="100vh"
      viewBox="0 0 100 100"
      initial="initial"
      animate="animate"
    >
      <AnimatePresence>
        {showSecondAnimation && (
          <defs>
            <mask id="myMask" x="0" y="0" width="100" height="100">
              <rect x="-100" y="0" width="400" height="100" fill="white" />
              <motion.circle
                cx="50"
                cy="50"
                r="5"
                fill="black"
                variants={scaleRadius}
              />
            </mask>
          </defs>
        )}
      </AnimatePresence>

      {showFirstAnimation && (
        <defs>
          <mask id="myMask" x="0" y="0" width="100" height="100">
            <rect x="-100" y="0" width="400" height="100" fill="white" />
            <circle cx="50" cy="50" r="5" fill="black" />
          </mask>
        </defs>
      )}

      <rect
        x="-100"
        y="0"
        width="400"
        height="100"
        fill="black"
        mask="url(#myMask)"
      ></rect>

      <AnimatePresence>
        {showFirstAnimation && (
          <>
            <motion.circle
              className={styles.circle}
              cx="50"
              cy="50"
              r="5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={draw}
            ></motion.circle>
            <motion.polygon
              className={styles.square}
              points="52 50 57 45 62 50 57 55 "
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={drawAndRemove}
            ></motion.polygon>
            <motion.polygon
              className={styles.triangle}
              points="48 50 40.5166852265 45 40.5166852265 55"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={drawAndRemove}
            ></motion.polygon>
            <motion.circle
              className={styles.circle}
              cx="50"
              cy="50"
              r="5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={drawHalf}
            ></motion.circle>
          </>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showSecondAnimation && (
          <>
            <motion.circle
              className={styles.circle}
              transition={{
                duration: 2,
              }}
              cx="50"
              cy="50"
              r="5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={scaleRadius}
              custom={0}
            ></motion.circle>
          </>
        )}
      </AnimatePresence>
    </motion.svg>
  );
};
export default Loading;
