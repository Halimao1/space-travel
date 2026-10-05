import { Link } from "react-router-dom";
import styles from "./SpacecraftCard.module.css";

function SpacecraftCard({ spacecraft, onDestroy }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.name}>{spacecraft.name}</h2>
      <p>
        <strong>Capacity:</strong> {spacecraft.capacity}
      </p>
      <p>{spacecraft.description}</p>

      <div className={styles.actions}>
        <Link to={`/spacecrafts/${spacecraft.id}`} className={styles.link}>
          View Details
        </Link>

        <button
          className={styles.button}
          onClick={() => onDestroy(spacecraft.id)}
        >
          Destroy
        </button>
      </div>
    </div>
  );
}

export default SpacecraftCard;
