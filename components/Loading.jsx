import styles from "../styles/Loading.module.css";
import { motion, AnimatePresence, animate } from "framer-motion";
import { useEffect, useState } from "react";

const Loading = ({ progress }) => {
  const normalizedProgress = progress / 100;

  const [showFirstAnimation, setShowFirstAnimation] = useState(false);
  const [showSecondAnimation, setShowSecondAnimation] = useState(false);

  useEffect(() => {
    setShowFirstAnimation(true);

    const timer = setTimeout(() => {
      setShowFirstAnimation(false);
      setShowSecondAnimation(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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

  const scale = {
    initial: { opacity: 0, scale: 1 },
    animate: () => {
      return {
        opacity: 1,
        scale: 30,
        transition: {
          scale: { duration: 3 },
          opacity: { duration: 0.01 },
        },
      };
    },
  };

  const scaleLeft = {
    initial: { opacity: 0, scale: 1, x: 0 },
    animate: () => {
      return {
        opacity: 1,
        scale: 30,
        x: -300,
        transition: {
          scale: { duration: 3 },
          x: { duration: 3 },
          opacity: { duration: 0.01 },
        },
      };
    },
  };

  const scaleRight = {
    initial: { opacity: 0, scale: 1, x: 0 },
    animate: () => {
      return {
        opacity: 1,
        scale: 30,
        x: 300,
        transition: {
          x: { duration: 3 },
          scale: { duration: 3 },
          opacity: { duration: 0.01 },
        },
      };
    },
  };

  return (
    <motion.div
    className={styles.backround}
      initial={{ clipPath: "circle(50% at 50% 50%)"}}
      animate={{ clipPath: "circle(0% at 50% 50%)" }}
      transition={{ delay: 2 ,duration: 2 }}
    >
      <motion.svg
        width="100vw"
        height="100vh"
        viewBox="0 0 100 100"
        initial="initial"
        animate="animate"
      >
        <AnimatePresence>
          {showFirstAnimation && (
            <>
              <motion.polygon
                className={styles.square}
                transition={{
                  duration: 2,
                }}
                points="52 50 57 45 62 50 57 55 "
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={draw}
              ></motion.polygon>
              {/* mask line */}
              <motion.polygon
                className={styles.triangle}
                transition={{
                  duration: 2,
                }}
                points="48 50 40.5166852265 45 40.5166852265 55"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={draw}
              ></motion.polygon>
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
                variants={draw}
              ></motion.circle>
              <motion.line
                className={styles.square}
                transition={{
                  duration: 0.5,
                }}
                x1={52}
                y1={50}
                x2={57}
                y2={45}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={draw}
              ></motion.line>
              <motion.line
                className={styles.triangle}
                transition={{
                  duration: 0.5,
                }}
                x1={48}
                y1={50}
                x2={40.5166852265}
                y2={45}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={draw}
              ></motion.line>
              {/* mask line */}
            </>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showSecondAnimation && (
            <>
              <motion.polygon
                className={styles.square}
                transition={{
                  duration: 2,
                }}
                points="52 50 57 45 62 50 57 55 "
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={scaleRight}
              ></motion.polygon>
              <motion.polygon
                className={styles.triangle}
                transition={{
                  duration: 2,
                }}
                points="48 50 40.5166852265 45 40.5166852265 55"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={scaleLeft}
              ></motion.polygon>
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
                variants={scale}
              ></motion.circle>
            </>
          )}
        </AnimatePresence>
      </motion.svg>
    </motion.div>
  );
};
export default Loading;
