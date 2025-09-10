import  { useState } from "react";
import ListFormContainer from "../../components/ListFormContainer";

const HorariosItem = () => {
  // Estado inicial de prueba
  const [horarios, setHorarios] = useState([
    { id: 1, veterinario: "Dr. Ramírez", dia: "Lunes", horaInicio: "09:00", horaFin: "13:00" },
    { id: 2, veterinario: "Dra. Gómez", dia: "Martes", horaInicio: "10:00", horaFin: "14:00" },
    { id: 3, veterinario: "Dr. Pérez", dia: "Viernes", horaInicio: "15:00", horaFin: "19:00" },
  ]);

  // Columnas de la tabla
  const columns = [
    { key: "veterinario", label: "Veterinario" },
    { key: "dia", label: "Día" },
    { key: "horaInicio", label: "Hora Inicio" },
    { key: "horaFin", label: "Hora Fin" },
  ];

  const handleDelete = (id) => {
    setHorarios((prev) => prev.filter((h) => h.id !== id));
  };

  return (
    <ListFormContainer
      title="Horarios"
      data={horarios}
      columns={columns}
      onDelete={handleDelete}
    />
  );
};

export default HorariosItem;
