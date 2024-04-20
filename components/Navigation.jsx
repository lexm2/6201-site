import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const menuItems = [
  { text: "Home", href: "#", color: "primary" }, //Color: Foreground Primary Secondary Success Warning Danger
  { text: "Events", href: "#", color: "primary" },
  { text: "Awards", href: "#", color: "primary" },
  { text: "Robots", href: "#", color: "primary" },
  { text: "Media", href: "#", color: "primary" },
  { text: "Sponsors", href: "#", color: "primary" },
  { text: "Donate", href: "#", color: "primary" },
  { text: "Contact", href: "#", color: "primary" },
  { text: "Settings", href: "#", color: "primary" },
];

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    {menuItems.map((item, i) => (
      <MenuItem item={item} key={i} />
    ))}
  </motion.ul>
);

export default Navigation;
