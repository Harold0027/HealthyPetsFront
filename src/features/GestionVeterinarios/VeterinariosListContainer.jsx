import { useState, useEffect } from "react";
import VeterinariosList from "./VeterinariosList";

// ✔ Import correcto
import { VeterinariosService } from "../../services/VeterinariosService";

const VeterinariosListContainer = () => {
  const [veterinarios, setVeterinarios] = useState([]);

  const cargarVeterinarios = async () => {
    try {
      const data = await VeterinariosService.getAll(); // ✔ Correcto
      setVeterinarios(data);
    } catch (error) {
      console.error("Error cargando veterinarios:", error);
    }
  };

  useEffect(() => {
    cargarVeterinarios();
  }, []);

  return (
    <div>
      {veterinarios.length > 0 ? (
        <VeterinariosList veterinarios={veterinarios} />
      ) : (
        <p>No hay veterinarios registrados.</p>
      )}
    </div>
  );
};

export default VeterinariosListContainer;
