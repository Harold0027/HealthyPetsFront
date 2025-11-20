import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// USUARIOS SERVICE (objeto)
import { UsuariosService } from "../services/UsuariosService";

// PACIENTES SERVICE (funciones sueltas)
import {
  getPacienteById,
  updatePaciente,
  deletePaciente,
  createPaciente
} from "../services/PacientesService";

// CITAS SERVICE (objeto)
import { CitasService } from "../services/CitasService";

// HORARIOS SERVICE (funciones sueltas)
import {
  getHorarioById,
  updateHorario,
  deleteHorario,
  createHorario
} from "../services/HorarioService";

// VETERINARIOS SERVICE (objeto)
import { VeterinariosService } from "../services/VeterinariosService";

const Editar = () => {
  const { category, id } = useParams();
  const [data, setData] = useState(null);

  const cargarData = async () => {
    try {
      switch (category) {

        /** USUARIOS **/
        case "usuarios":
          setData(await UsuariosService.getById(id));
          break;

        /** PACIENTES **/
        case "pacientes":
          setData(await getPacienteById(id));
          break;

        /** CITAS **/
        case "citas":
          setData(await CitasService.getById(id));
          break;

        /** HORARIOS **/
        case "horarios":
          setData(await getHorarioById(id));
          break;

        /** VETERINARIOS **/
        case "veterinarios":
          setData(await VeterinariosService.getById(id));
          break;

        default:
          console.warn("Categoría desconocida:", category);
          break;
      }
    } catch (error) {
      console.error("Error cargando datos:", error);
    }
  };

  useEffect(() => {
    cargarData();
  }, []);

  if (!data) return <p>Cargando...</p>;

  return (
    <div>
      <h1>Editando {category}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Editar;
