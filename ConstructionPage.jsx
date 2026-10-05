import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SpaceTravelApi from "../services/SpaceTravelApi";
import BackButton from "../components/BackButton/BackButton";
import SpacecraftForm from "../components/SpacecraftForm/SpacecraftForm";

function ConstructionPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    capacity: "",
    description: "",
    pictureUrl: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    capacity: false,
    description: false,
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function validateForm() {
    const newErrors = {
      name: formData.name.trim() === "",
      capacity: formData.capacity === "",
      description: formData.description.trim() === "",
    };

    setErrors(newErrors);

    return !newErrors.name && !newErrors.capacity && !newErrors.description;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) return;

    try {
      await SpaceTravelApi.buildSpacecraft({
        name: formData.name,
        capacity: Number(formData.capacity),
        description: formData.description,
        pictureUrl: formData.pictureUrl || undefined,
      });

      navigate("/spacecrafts");
    } catch (error) {
      console.error("Error building spacecraft:", error);
    }
  }

  return (
    <div>
      <BackButton />
      <h1>Build a New Spacecraft</h1>

      <SpacecraftForm
        formData={formData}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default ConstructionPage;
