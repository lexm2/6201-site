import * as React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Sidebar.module.css";

const variants = {
  open: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    x: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      x: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={styles.iconplaceholder} style={style} />
      <div className={styles.textplaceholder} style={style} />
    </motion.li>
  );
};

export default MenuItem;
