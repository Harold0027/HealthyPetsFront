import { useEffect, useState } from "react";
import PacientesList from "./PacientesList";
import { getPacientes } from "../../services/PacientesService";

const PacientesContainer = () => {
  const [pacientes, setPacientes] = useState([]);

  const fetchPacientes = async () => {
    try {
      const response = await getPacientes();
      setPacientes(response.data);
    } catch (error) {
      console.error("Error cargando pacientes:", error);
    }
  };

  useEffect(() => {
    fetchPacientes();
  }, []);

  return <PacientesList pacientes={pacientes} />;
};

export default PacientesContainer;
