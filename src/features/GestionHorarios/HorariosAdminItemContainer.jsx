import { useState, useEffect } from "react";
import HorariosAdminItem from "./HorariosAdminItem";

import {
  getHorarios,
  deleteHorario
} from "../../services/HorarioService";

const HorariosAdminItemContainer = () => {
  const [horarios, setHorarios] = useState([]);

  const cargarHorarios = async () => {
    try {
      const data = await getHorarios();
      setHorarios(data);
    } catch (error) {
      console.error("Error al cargar horarios:", error);
    }
  };

  const eliminar = async (id) => {
    try {
      await deleteHorario(id);
      cargarHorarios();
    } catch (error) {
      console.error("Error al eliminar horario:", error);
    }
  };

  useEffect(() => {
    cargarHorarios();
  }, []);

  return (
    <div>
      {horarios.length > 0 ? (
        horarios.map((item) => (
          <HorariosAdminItem
            key={item.id}
            horario={item}
            eliminar={eliminar}
          />
        ))
      ) : (
        <p>No hay horarios registrados.</p>
      )}
    </div>
  );
};

export default HorariosAdminItemContainer;
