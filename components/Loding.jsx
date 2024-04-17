import styles from "../styles/Loading.module.css";
import { motion } from "framer-motion";

const Loading = ({ progress }) => {
  const normalizedProgress = progress / 100;

  return (
    <div className={styles.backround}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <motion.g>
          <motion.polygon
            className={styles.square}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: 1,
              repeatType: "reverse",
              repeatDelay: 0.5,
            }}
            points="52 50 57 45 62 50 57 55 "
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></motion.polygon>

          {/* mask line */}
          <motion.polygon
            className={styles.triangle}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: 1,
              repeatType: "reverse",
              repeatDelay: 0.5,
            }}
            points="48 50 40.5166852265 45 40.5166852265 55 "
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></motion.polygon>
          <motion.circle
            className={styles.circle}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
            }}
            cx="50"
            cy="50"
            r="5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></motion.circle>
          <motion.line
            className={styles.square}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 0.5,
              repeat: 1,
              repeatType: 'reverse',
              repeatDelay: 3.25,
              opacity: { delay: 0, duration: 0.01 }
            }}
            x1={52}
            y1={50}
            x2={57}
            y2={45}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></motion.line>
          <motion.line
            className={styles.triangle}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 0.5,
              repeat: 1,
              repeatType: "reverse",
              repeatDelay: 3.25,
            }}
            x1={48}
            y1={50}
            x2={40.5166852265}
            y2={45}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></motion.line>
          {/* mask line */}
        </motion.g>
      </svg>
    </div>
  );
};
export default Loading;
