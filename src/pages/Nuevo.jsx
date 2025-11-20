import { useParams } from "react-router-dom";
import { useState } from "react";

// USUARIOS SERVICE (objeto)
import { UsuariosService } from "../services/UsuariosService";

// PACIENTES SERVICE (funciones individuales)
import {
  createPaciente
} from "../services/PacientesService";

// CITAS SERVICE (objeto)
import { CitasService } from "../services/CitasService";

// HORARIOS SERVICE (funciones individuales)
import {
  createHorario
} from "../services/HorarioService";

// VETERINARIOS SERVICE (objeto)
import { VeterinariosService } from "../services/VeterinariosService";

const Nuevo = () => {
  const { category } = useParams();
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      switch (category) {

        /** USUARIOS **/
        case "usuarios":
          await UsuariosService.create(form);
          break;

        /** PACIENTES **/
        case "pacientes":
          await createPaciente(form);
          break;

        /** CITAS **/
        case "citas":
          await CitasService.create(form);
          break;

        /** HORARIOS **/
        case "horarios":
          await createHorario(form);
          break;

        /** VETERINARIOS **/
        case "veterinarios":
          await VeterinariosService.create(form);
          break;

        default:
          console.warn("Categoría desconocida:", category);
      }
    } catch (error) {
      console.error("Error al crear:", error);
    }
  };

  return (
    <div>
      <h1>Crear nuevo {category}</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Ingrese nombre"
          onChange={handleChange}
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default Nuevo;
