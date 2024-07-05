import * as React from "react";
import { motion } from "framer-motion";
import styles from "@/styles/Sidebar.module.css";
import { Link } from "@nextui-org/react";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ item, i }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ x: -5 }}
      whileTap={{ scale: 0.93 }}
    >
      <Link isBlock className="w-full ml-2" href={item.href} size="lg" color={item.color}>
        {item.text}
      </Link>
    </motion.li>
  );
};

export default MenuItem;
