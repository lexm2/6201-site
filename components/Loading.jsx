import styles from "../styles/Loading.module.css";
import { motion, AnimatePresence, animate } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const Loading = ({ loading, setLoadingAnimFinished }) => {
  const easeingArray = [0.075, 0.82, 0.165, 1];

  const [showFirstAnimation, setShowFirstAnimation] = useState(false);
  const [showSecondAnimation, setShowSecondAnimation] = useState(false);

  const square = useRef(null);
  const triagle = useRef(null);
  const circle = useRef(null);

  useEffect(() => {
    setShowFirstAnimation(true);

    if (loading === false) {
      setShowSecondAnimation(true);
      setShowFirstAnimation(false);
    }
  }, [loading, setLoadingAnimFinished]);

  const opacityEaseOut = () => {
    animate(square.current, { opacity: 0 }, { duration: 0.05 });
    animate(triagle.current, { opacity: 0 }, { duration: 0.05 });
  };

  const opacityEaseIn = () => {
    animate(square.current, { opacity: 1 }, { duration: 0.05 });
    animate(triagle.current, { opacity: 1 }, { duration: 0.05 });
    animate(circle.current, { opacity: 1 }, { duration: 0.05 });
  };

  const draw = {
    initial: { pathLength: 0, opacity: 0 },
    animate: (i) => {
      return {
        pathLength: i,
        transition: {
          pathLength: {
            delay: 1,
            duration: 2,
            ease: easeingArray,
          },
        },
      };
    },
  };

  const drawAndRemove = {
    initial: { pathLength: 0, opacity: 0 },
    animate: () => {
      return {
        pathLength: 1,
        transition: {
          pathLength: {
            delay: 1,
            duration: 2,
            ease: easeingArray,
            repeat: 1,
            repeatType: "mirror",
            repeat: 1,
          },
        },
      };
    },
  };

  const scaleRadius = {
    initial: { r: 5 },
    animate: () => {
      return {
        r: 135,
        transition: {
          r: { duration: 1, type: "spring", bounce: 0 },
        },
      };
    },
  };
  //stroke-width
  const scaleUp = {
    initial: { scale: 1 },
    animate: () => {
      return {
        scale: 27,
        transition: {
          scale: { duration: 1, type: "spring", bounce: 0 },
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
              onAnimationStart={opacityEaseIn}
              ref={circle}
              key="1"
              className={styles.circle}
              cx="50"
              cy="50"
              r="5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={draw}
              custom={1}
            ></motion.circle>
            <motion.polygon
              ref={square}
              key="2"
              className={styles.square}
              points="52 50 57 45 62 50 57 55 "
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={drawAndRemove}
              onAnimationComplete={opacityEaseOut}
            ></motion.polygon>
            <motion.polygon
              ref={triagle}
              key="3"
              className={styles.triangle}
              points="48 50 40.5166852265 45 40.5166852265 55"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={drawAndRemove}
            ></motion.polygon>
            <motion.circle
              key="4"
              className={styles.circle}
              cx="50"
              cy="50"
              r="5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={draw}
              custom={0.5}
            ></motion.circle>
          </>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showSecondAnimation && (
          <>
            <motion.circle
              className={styles.circle}
              cx="50"
              cy="50"
              r="5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={scaleUp}
              onAnimationComplete={(definition) => {
                setLoadingAnimFinished(true);
              }}
            ></motion.circle>
          </>
        )}
      </AnimatePresence>
    </motion.svg>
  );
};
export default Loading;
