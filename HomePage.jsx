import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🚀 Space Travel</h1>

      <p className={styles.description}>
        Humanity is leaving Earth. As a commander, your mission is to manage
        spacecraft, transport people, and expand civilization across the solar
        system.
      </p>

      <div className={styles.links}>
        <Link to="/spacecrafts" className={styles.card}>
          <h2>View Spacecrafts</h2>
          <p>See all spacecraft and manage your fleet.</p>
        </Link>

        <Link to="/construction" className={styles.card}>
          <h2>Build Spacecraft</h2>
          <p>Create new spacecraft to expand your mission.</p>
        </Link>

        <Link to="/planets" className={styles.card}>
          <h2>Explore Planets</h2>
          <p>View planets and send spacecraft between them.</p>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
