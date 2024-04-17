import styles from "../styles/Loading.module.css";
import { motion } from "framer-motion";

const Loading = ({ progress }) => {
  const normalizedProgress = progress / 100;

  const parentVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 2, duration: 0.01 } },
  };

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
        scale: 2,
        transition: {
          scale: { duration: 2 },
          opacity: { duration: 0.01 },
        },
      };
    },
  };

  return (
    <div className={styles.backround}>
      <motion.svg
        width="100vw"
        height="100vh"
        viewBox="0 0 100 100"
        initial="initial"
        animate="animate"
        variants={parentVariant}
      >
        <motion.g>
          <motion.polygon
            className={styles.square}
            transition={{
              duration: 2,
            }}
            points="52 50 57 45 62 50 57 55 "
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            
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
        </motion.g>
        <motion.g>
          <motion.polygon
            className={styles.square}
            transition={{
              duration: 2,
            }}
            points="52 50 57 45 62 50 57 55 "
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={scale}
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
            variants={scale}
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
        </motion.g>
      </motion.svg>
    </div>
  );
};
export default Loading;
