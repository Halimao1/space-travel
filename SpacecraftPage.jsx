import { useEffect, useState } from "react";
import SpaceTravelApi from "../services/SpaceTravelApi";
import Loading from "../components/Loading/Loading";
import { useParams, Link } from "react-router-dom";

function SpacecraftPage() {
  const { spacecraftId } = useParams();
  const [spacecraft, setSpacecraft] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchSpacecraft() {
      try {
        const response = await SpaceTravelApi.getSpacecraftById({
          id: spacecraftId,
        });
        setSpacecraft(response.data);
      } catch (error) {
        console.error("Error fetching spacecraft:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchSpacecraft();
  }, [spacecraftId]);

  if (isLoading) {
    return <Loading />;
  }

  if (!spacecraft) {
    return (
      <div>
        <p>Spacecraft not found.</p>
        <Link to="/spacecrafts">Back to Spacecrafts List</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{spacecraft.name}</h1>
      <p>
        <strong>ID:</strong> {spacecraft.id}
      </p>
      <p>
        <strong>Capacity:</strong> {spacecraft.capacity}
      </p>
      <p>
        <strong>Description:</strong> {spacecraft.description}
      </p>
      <p>
        <strong>Current Location:</strong> {spacecraft.currentLocation}
      </p>

      {spacecraft.pictureUrl && (
        <img
          src={spacecraft.pictureUrl}
          alt={spacecraft.name}
          style={{ maxWidth: "300px" }}
        />
      )}

      <br />
      <br />
      <Link to="/spacecrafts">Back to Spacecrafts</Link>
    </div>
  );
}

export default SpacecraftPage;
