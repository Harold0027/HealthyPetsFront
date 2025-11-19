import { useState, useEffect } from "react";
import HorariosAdminItem from "./HorariosAdminItem";
import { getHorarios, deleteHorario } from "../../services/HorariosService";

const HorariosAdminItemContainer = () => {
  const [horarios, setHorarios] = useState([]);

  const load = async () => {
    try {
      const res = await getHorarios();
      setHorarios(res);
    } catch (e) {
      console.error("Error cargando horarios:", e);
    }
  };

  const handleDelete = async (horario) => {
    if (!window.confirm("¿Eliminar este horario?")) return;
    try {
      await deleteHorario(horario.id);
      load();
    } catch (e) {
      console.error("Error eliminando horario:", e);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return <HorariosAdminItem data={horarios} onDelete={handleDelete} />;
};

export default HorariosAdminItemContainer;
