import { useState } from "react";
import ListFormContainer from "../../components/ListFormContainer";

const CitasAdminItem = () => {
  // Estado inicial simulado como vendría de la BD
  const [citas, setCitas] = useState([
    {
      id: 1,
      mascota_id: 223,
      veterinario_id: 12,
      paciente: "Firulais",
      propietario: "Juan Pérez",
      fecha: "2025-09-15",
      hora: "10:30",
      motivo: "Chequeo general"
    },
    {
      id: 2,
      mascota_id: 224,
      veterinario_id: 13,
      paciente: "Luna",
      propietario: "María López",
      fecha: "2025-09-16",
      hora: "14:00",
      motivo: "Vacunación"
    },
  ]);

  // Columnas: reflejamos las relaciones con IDs, 
  // pero luego al conectar con el back se mapeará a nombres
  const columns = [
    { key: "id", label: "id" },
    { key: "paciente", label: "Paciente" },
    { key: "propietario", label: "Propietario" },
    { key: "veterinario_id", label: "Veterinario (ID)" },
    { key: "mascota_id", label: "Mascota (ID)" },
    { key: "fecha", label: "Fecha" },
    { key: "hora", label: "Hora" },
    { key: "motivo", label: "Motivo" },
  ];

 const handleDelete = (cita) => setCitas(citas.filter((c) => c.id !== cita.id));

  return (
    <ListFormContainer
      title="Gestión de Citas"
      category="citas"
      data={citas}
      columns={columns}
      onDelete={handleDelete}
    />
  );
};

export default CitasAdminItem;
