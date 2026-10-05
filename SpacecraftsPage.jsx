import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SpaceTravelApi from "../services/SpaceTravelApi";
import Loading from "../components/Loading/Loading";
import SpacecraftCard from "../components/SpacecraftCard/SpacecraftCard";

function SpacecraftsPage() {
  const [spacecrafts, setSpacecrafts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSpacecrafts();
  }, []);

  async function fetchSpacecrafts() {
    try {
      const response = await SpaceTravelApi.getSpacecrafts();
      setSpacecrafts(response.data);
    } catch (error) {
      console.error("Error fetching spacecrafts:", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDestroy(id) {
    try {
      await SpaceTravelApi.destroySpacecraftById({ id });
      setSpacecrafts((prevSpacecrafts) =>
        prevSpacecrafts.filter((spacecraft) => spacecraft.id !== id),
      );
    } catch (error) {
      console.error("Error destroying spacecraft:", error);
    }
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>All Spacecrafts</h1>

      <Link to="/construction">Build New Spacecraft</Link>

      {spacecrafts.length === 0 ? (
        <p>No spacecrafts found.</p>
      ) : (
        spacecrafts.map((spacecraft) => (
          <SpacecraftCard
            key={spacecraft.id}
            spacecraft={spacecraft}
            onDestroy={handleDestroy}
          />
        ))
      )}
    </div>
  );
}

export default SpacecraftsPage;
