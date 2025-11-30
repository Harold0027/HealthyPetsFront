import { useEffect, useState } from "react";
import CitasAdminItem from "./CitasAdminItem";
import { CitasService } from "../../services/CitasService";

const CitasAdminItemContainer = () => {
  const [citas, setCitas] = useState([]);

  const fetchCitas = async () => {
    try {
      const data = await CitasService.getAll();
      setCitas(data);
    } catch (error) {
      console.error("Error cargando citas:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await CitasService.remove(id);
      fetchCitas();
    } catch (error) {
      console.error("Error eliminando cita:", error);
    }
  };

  useEffect(() => {
    fetchCitas();
  }, []);

  return (
    <CitasAdminItem
      data={citas}
      onDelete={handleDelete}
      reload={fetchCitas}
    />
  );
};

export default CitasAdminItemContainer;
