import React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "@/utils/useDimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { useClickAway } from "react-use";
import styles from "../styles/Sidebar.module.css";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const hide = {
  open: () => ({
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
    },
  }),
  closed: {
    opacity: 0,
    transition: {
      type: "spring",
      duration: 2,
    },
  },
};

export const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  useClickAway(containerRef, () => {
    if (isOpen) {
      toggleOpen();
    }
  });
  const { height } = useDimensions(containerRef);

  return (
    <>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className={styles.blur}
        variants={hide}
      />
      <motion.nav
        className={styles.navigation}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className={styles.background} variants={sidebar}>
          <MenuToggle toggle={() => toggleOpen()} />
          <Navigation className={styles.navigation} />
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Sidebar;
