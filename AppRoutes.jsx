import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SpacecraftsPage from "../pages/SpacecraftsPage";
import SpacecraftPage from "../pages/SpacecraftPage";
import ConstructionPage from "../pages/ConstructionPage";
import PlanetsPage from "../pages/PlanetsPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/spacecrafts" element={<SpacecraftsPage />} />
      <Route
        path="/spacecrafts/:spacecraftId"
        element={<SpacecraftPage />}
      />{" "}
      <Route path="/construction" element={<ConstructionPage />} />
      <Route path="/planets" element={<PlanetsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
