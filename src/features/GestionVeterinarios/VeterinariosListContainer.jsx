import { useEffect, useState } from "react";
import VeterinariosList from "./VeterinariosList";
import { getVeterinarios } from "../../services/VeterinariosService";

const VeterinariosContainer = () => {
  const [veterinarios, setVeterinarios] = useState([]);

  const fetchVeterinarios = async () => {
    try {
      const response = await getVeterinarios();
      setVeterinarios(response.data);
    } catch (error) {
      console.error("Error cargando veterinarios:", error);
    }
  };

  useEffect(() => {
    fetchVeterinarios();
  }, []);

  return <VeterinariosList veterinarios={veterinarios} />;
};

export default VeterinariosContainer;
