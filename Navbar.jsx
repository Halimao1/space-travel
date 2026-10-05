import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>Space Travel</h2>

      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/spacecrafts">Spacecrafts</Link>
        <Link to="/construction">Build</Link>
        <Link to="/planets">Planets</Link>
      </div>
    </nav>
  );
}

export default Navbar;
