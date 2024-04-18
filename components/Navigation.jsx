import { Sidebar } from "./Sidebar";
import styles from "../styles/Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>
    </nav>
  );
};

export default Navigation;
