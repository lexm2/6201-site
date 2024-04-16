import styles from "../styles/Loading.module.css";
import { motion } from "framer-motion";

const Loading = ({ progress }) => {
  const normalizedProgress = progress / 100;

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: () => {
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { type: "spring", duration: 1.5, bounce: 0 },
          opacity: { duration: 0.01 }
        }
      };
    }
  };

  return (
    <div className={styles.backround}>
      <motion.svg
        width="100vw"
        height="100vh"
        viewBox="0 0 100 100"
        initial="hidden"
        animate="visible"
      >
        <motion.line
          x1="48"
          y1={60}
          x2="48"
          y2={60 - normalizedProgress * 20}
          style={{ stroke: "#ed1c24", strokeWidth: 1 }}
          animate={{ y2: 60 - normalizedProgress * 20 }}
          variants={draw}
          onAnimationComplete={() => {console.log('complete')}}
          custom
        />
        <motion.line
          x1="50"
          y1={60}
          x2="50"
          y2={60 - normalizedProgress * 20}
          style={{ stroke: "#ffffff", strokeWidth: 1 }}
          animate={{ y2: 60 - normalizedProgress * 20 }}
          variants={draw}
          custom
        />
        <motion.line
          x1="52"
          y1={60}
          x2="52"
          y2={60 - normalizedProgress * 20}
          style={{ stroke: "#0066b3", strokeWidth: 1 }}
          animate={{ y2: 60 - normalizedProgress * 20 }}
          variants={draw}
          custom
        />
      </motion.svg>
    </div>
  );
};
export default Loading;
