import React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "@/utils/useDimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { useClickAway } from "react-use";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  CardFooter,
  Link,
} from "@nextui-org/react";
import styles from "@/styles/Sidebar.module.css";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 3.3rem 3.2rem)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 3.3rem 3.2rem)",
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

  const handleToggle = () => {
    toggleOpen();
    containerRef.current.style.pointerEvents = isOpen ? "none" : "auto";
  };

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
        <motion.div variants={sidebar}>
          <Card className={styles.background}>
            <CardHeader className="flex gap-4">
              <MenuToggle toggle={handleToggle} />
              <div className="flex flex-col">
                <p className="text-md">6201</p>
                <p className="text-small text-default-500">team6201.com</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className={styles.override_Y_Overflow}>
              <Navigation className={styles.navigation} />
            </CardBody>
            <Divider />
            <CardFooter>
              <Link isExternal showAnchorIcon href="#" className="ml-2">
                Visit source code on GitHub.
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Sidebar;
