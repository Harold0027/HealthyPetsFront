import { useState, useEffect } from "react";
import HorariosAdminItem from "./HorariosAdminItem";
import { getHorarios, deleteHorario } from "../../services/HorariosService";

const HorariosAdminItemContainer = () => {
  const [horarios, setHorarios] = useState([]);

  const fetchHorarios = async () => {
    try {
      const response = await getHorarios();
      setHorarios(response.data);
    } catch (error) {
      console.error("Error cargando horarios:", error);
    }
  };

  const handleDelete = async (horario) => {
    try {
      await deleteHorario(horario.id);
      setHorarios(horarios.filter(h => h.id !== horario.id));
    } catch (error) {
      console.error("Error eliminando horario:", error);
    }
  };

  useEffect(() => {
    fetchHorarios();
  }, []);

  return <HorariosAdminItem data={horarios} onDelete={handleDelete} />;
};

export default HorariosAdminItemContainer;
