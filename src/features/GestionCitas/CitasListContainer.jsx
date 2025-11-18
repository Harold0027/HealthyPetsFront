import { useEffect, useState } from "react";
import CitasList from "./CitasList";
import { getCitas } from "../../services/CitasService";

const CitasListContainer = () => {
  const [citas, setCitas] = useState([]);

  const fetchCitas = async () => {
    try {
      const response = await getCitas();
      setCitas(response.data);
    } catch (error) {
      console.error("Error cargando citas:", error);
    }
  };

  useEffect(() => {
    fetchCitas();
  }, []);

  return <CitasList citas={citas} />;
};

export default CitasListContainer;
