import { useState } from "react";
import styles from "./PlanetCard.module.css";

function PlanetCard({ planet, spacecrafts, planets, onSend }) {
  const [selectedSpacecraft, setSelectedSpacecraft] = useState("");
  const [targetPlanet, setTargetPlanet] = useState("");

  const stationedSpacecrafts = spacecrafts.filter(
    (sc) => sc.currentLocation === planet.id,
  );

  function handleSendClick() {
    if (!selectedSpacecraft || !targetPlanet) {
      alert("Select spacecraft and target planet");
      return;
    }

    if (Number(targetPlanet) === planet.id) {
      alert("Cannot send to the same planet");
      return;
    }

    onSend(selectedSpacecraft, Number(targetPlanet));
  }

  return (
    <div className={styles.card}>
      <h2>{planet.name}</h2>
      <p>Population: {planet.currentPopulation}</p>

      <h4>Spacecraft on this planet:</h4>

      {stationedSpacecrafts.length === 0 ? (
        <p>No spacecraft here</p>
      ) : (
        stationedSpacecrafts.map((sc) => <p key={sc.id}>{sc.name}</p>)
      )}

      <div className={styles.controls}>
        <select
          value={selectedSpacecraft}
          onChange={(e) => setSelectedSpacecraft(e.target.value)}
        >
          <option value="">Select spacecraft</option>
          {stationedSpacecrafts.map((sc) => (
            <option key={sc.id} value={sc.id}>
              {sc.name}
            </option>
          ))}
        </select>

        <select
          value={targetPlanet}
          onChange={(e) => setTargetPlanet(e.target.value)}
        >
          <option value="">Select destination</option>
          {planets.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>

        <button onClick={handleSendClick}>Send</button>
      </div>
    </div>
  );
}

export default PlanetCard;
