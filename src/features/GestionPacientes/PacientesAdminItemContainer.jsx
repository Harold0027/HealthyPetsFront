import { useState, useEffect } from "react";
import PacientesAdminItem from "./PacientesAdminItem";
import { PacientesService } from "../../services/PacientesService";

const PacientesAdminItemContainer = () => {
  const [pacientes, setPacientes] = useState([]);

  const fetchPacientes = async () => {
    try {
      const data = await PacientesService.getAll();
      setPacientes(data);
    } catch (error) {
      console.error("Error cargando pacientes:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await PacientesService.deletePaciente(id);
      setPacientes(pacientes.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Error eliminando paciente:", error);
    }
  };

  useEffect(() => {
    fetchPacientes();
  }, []);

  return (
    <PacientesAdminItem
      data={pacientes}
      onDelete={handleDelete}
      reload={fetchPacientes}
    />
  );
};

export default PacientesAdminItemContainer;
