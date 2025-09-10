import  { useState } from "react";
import ListFormContainer from "../../components/ListFormContainer";

const CitasAdminItem = () => {
  // Estado inicial de prueba
  const [citas, setCitas] = useState([
    {
      id: 1,
      paciente: "Firulais",
      propietario: "Juan Pérez",
      veterinario: "Dra. Gómez",
      fecha: "2025-09-15",
      hora: "10:30",
      motivo: "Chequeo general"
    },
    {
      id: 2,
      paciente: "Michi",
      propietario: "María López",
      veterinario: "Dr. Ramírez",
      fecha: "2025-09-16",
      hora: "14:00",
      motivo: "Vacunas"
    },
  ]);

  // Columnas de la tabla
  const columns = [
    { key: "paciente", label: "Paciente" },
    { key: "propietario", label: "Propietario" },
    { key: "veterinario", label: "Veterinario" },
    { key: "fecha", label: "Fecha" },
    { key: "hora", label: "Hora" },
    { key: "motivo", label: "Motivo" },
  ];

  // Acción eliminar
  const handleDelete = (id) => {
    setCitas((prev) => prev.filter((cita) => cita.id !== id));
  };

  return (
    <ListFormContainer
      title="Citas"
      data={citas}
      columns={columns}
      onDelete={handleDelete}
    />
  );
};

export default CitasAdminItem;
