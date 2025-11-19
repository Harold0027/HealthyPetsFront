import { useState, useEffect } from "react";

const PacientesForm = ({ onSubmit, initialData }) => {
  const [paciente, setPaciente] = useState({
    duenoId: "",
    nombre: "",
    especie: "",
    raza: "",
    edad: "",
  });

  useEffect(() => {
    if (initialData) setPaciente(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaciente({ ...paciente, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(paciente);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="duenoId"
        placeholder="ID del propietario"
        value={paciente.duenoId}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="nombre"
        placeholder="Nombre del paciente"
        value={paciente.nombre}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="especie"
        placeholder="Especie"
        value={paciente.especie}
        onChange={handleChange}
      />
      <input
        type="text"
        name="raza"
        placeholder="Raza"
        value={paciente.raza}
        onChange={handleChange}
      />
      <input
        type="number"
        name="edad"
        placeholder="Edad"
        value={paciente.edad}
        onChange={handleChange}
      />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default PacientesForm;
