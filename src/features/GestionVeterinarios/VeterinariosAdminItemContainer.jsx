import { useState, useEffect } from "react";
import VeterinariosAdminItem from "./VeterinariosAdminItem";

// ✔ Import correcto del servicio
import { VeterinariosService } from "../../services/VeterinariosService";

const VeterinariosAdminItemContainer = () => {
  const [veterinarios, setVeterinarios] = useState([]);

  const cargarVeterinarios = async () => {
    try {
      const data = await VeterinariosService.getAll();
      setVeterinarios(data);
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
    <div>
      {veterinarios.length > 0 ? (
        veterinarios.map((v) => (
          <VeterinariosAdminItem
            key={v.id}
            veterinario={v}
            eliminar={eliminar}
          />
        ))
      ) : (
        <p>No hay veterinarios registrados.</p>
      )}
    </div>
  );
};

export default VeterinariosAdminItemContainer;
