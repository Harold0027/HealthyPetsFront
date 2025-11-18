import { useState, useEffect } from "react";
import VeterinariosAdminItem from "./VeterinariosAdminItem";
import { getVeterinarios, deleteVeterinario } from "../../services/VeterinariosService";

const VeterinariosAdminItemContainer = () => {
  const [veterinarios, setVeterinarios] = useState([]);

  const fetchVeterinarios = async () => {
    try {
      const response = await getVeterinarios();
      setVeterinarios(response.data);
    } catch (error) {
      console.error("Error al cargar veterinarios:", error);
    }
  };

  const handleDelete = async (vet) => {
    try {
      await deleteVeterinario(vet.id);
      setVeterinarios(veterinarios.filter(v => v.id !== vet.id));
    } catch (error) {
      console.error("Error eliminando veterinario:", error);
    }
  };

  useEffect(() => {
    fetchVeterinarios();
  }, []);

  return <VeterinariosAdminItem data={veterinarios} onDelete={handleDelete} />;
};

export default VeterinariosAdminItemContainer;
