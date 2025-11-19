import { useState, useEffect } from "react";
import PacientesAdminItem from "./PacientesAdminItem";
import { getPacientes, deletePaciente } from "../../services/PacientesService";

const PacientesAdminItemContainer = () => {
  const [pacientes, setPacientes] = useState([]);

  const fetchPacientes = async () => {
    try {
      const data = await getPacientes();
      setPacientes(data);
    } catch (error) {
      console.error("Error cargando pacientes:", error);
    }
  };

  const handleDelete = async (paciente) => {
    try {
      await deletePaciente(paciente.id);
      setPacientes(pacientes.filter((p) => p.id !== paciente.id));
    } catch (error) {
      console.error("Error eliminando paciente:", error);
    }
  };

  useEffect(() => {
    fetchPacientes();
  }, []);

  return <PacientesAdminItem data={pacientes} onDelete={handleDelete} />;
};

export default PacientesAdminItemContainer;
