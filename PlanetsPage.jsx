import { useEffect, useState } from "react";
import SpaceTravelApi from "../services/SpaceTravelApi";
import Loading from "../components/Loading/Loading";
import PlanetCard from "../components/PlanetCard/PlanetCard";

function PlanetsPage() {
  const [planets, setPlanets] = useState([]);
  const [spacecrafts, setSpacecrafts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const planetsRes = await SpaceTravelApi.getPlanets();
      const spacecraftsRes = await SpaceTravelApi.getSpacecrafts();

      setPlanets(planetsRes.data);
      setSpacecrafts(spacecraftsRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSend(spacecraftId, targetPlanetId) {
    try {
      await SpaceTravelApi.sendSpacecraftToPlanet({
        spacecraftId,
        targetPlanetId,
      });

      fetchData();
    } catch (error) {
      alert(error.message);
    }
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>Planets</h1>

      {planets.map((planet) => (
        <PlanetCard
          key={planet.id}
          planet={planet}
          spacecrafts={spacecrafts}
          planets={planets}
          onSend={handleSend}
        />
      ))}
    </div>
  );
}

export default PlanetsPage;
