import { useState, useEffect } from "react";
import VeterinariosAdminItem from "./VeterinariosAdminItem";
import { VeterinariosService } from "../../services/VeterinariosService";

const VeterinariosAdminItemContainer = () => {
  const [veterinarios, setVeterinarios] = useState([]);

  const cargarVeterinarios = async () => {
    try {
      const data = await VeterinariosService.getAll();
      setVeterinarios(data.map(v => ({ ...v, id: v.id ?? v._id })));
    } catch (error) {
      console.error("Error al cargar veterinarios:", error);
    }
  };

  const eliminar = async (id) => {
    try {
      await VeterinariosService.remove(id);
      cargarVeterinarios();
    } catch (error) {
      console.error("Error al eliminar veterinario:", error);
    }
  };

  useEffect(() => {
    cargarVeterinarios();
  }, []);

  return (
    <VeterinariosAdminItem
      data={veterinarios}
      onDelete={eliminar}
      reload={cargarVeterinarios}
    />
  );
};

export default VeterinariosAdminItemContainer;
