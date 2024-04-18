import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { AiOutlineRollback } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useClickAway } from "react-use";
import styles from "../styles/Sidebar.module.css";
import { SidebarItems } from "./SidebarItems";

const framerSidebarBackground = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
  transition: { duration: 0.3 },
};

const framerSidebarPanel = {
  initial: { x: "-100%" },
  animate: { x: 0 },
  exit: { x: "-100%" },
  transition: { duration: 0.3 },
};

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));
  const toggleSidebar = () => setOpen((prev) => !prev);

  return (
    <>
      <button
        onClick={toggleSidebar}
        className={styles.menuButton}
        aria-label="toggle sidebar"
      >
        <GiHamburgerMenu />
      </button>
      <AnimatePresence mode="wait" initial={false}>
        {open && (
          <>
            <motion.div
              {...framerSidebarBackground}
              aria-hidden="true"
              className={styles.framerSidebarBackground}
            ></motion.div>
            <motion.nav
              {...framerSidebarPanel}
              className={styles.framerSidebarPanel}
              ref={ref}
              aria-label="Sidebar"
            >
              <div className={styles.welcomeDiv}>
                <span>Welcome</span>
                <button
                  onClick={toggleSidebar}
                  className={styles.toggleSidebarButton}
                  aria-label="close sidebar"
                >
                  <AiOutlineRollback />
                </button>
              </div>
              <SidebarItems toggleSidebar />
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
