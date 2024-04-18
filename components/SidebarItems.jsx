import { motion } from "framer-motion";
import { BiHomeSmile, BiUser } from "react-icons/bi";
import { FiSettings, FiShoppingCart } from "react-icons/fi";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import styles from "../styles/Sidebar.module.css";

const items = [
  { title: "Home", Icon: BiHomeSmile, href: "#" },
  { title: "About", Icon: BiUser },
  { title: "Contact", Icon: HiOutlineChatBubbleBottomCenterText, href: "#" },
  { title: "Settings", Icon: FiSettings, href: "#" },
  { title: "Shop", Icon: FiShoppingCart, href: "#" },
];

const framerText = (delay) => {
  return {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: {
      delay: 0.5 + delay / 10,
    },
  };
};

const framerIcon = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      delay: 1.5,
    },
  }
  

export const SidebarItems = ({ toggleSidebar }) => {
  return (
    <ul>
      {items.map((item, idx) => {
        const { title, href, Icon } = item;
        return (
          <li key={title}>
            <a
              onClick={toggleSidebar}
              href={href}
              className={styles.sidebarBackButton}
            >
              <motion.span {...framerText(idx)}>{title}</motion.span>
              <motion.div {...framerIcon}>
                <Icon className="text-2xl" />
              </motion.div>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
