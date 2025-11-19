import HorariosForm from "../GestionHorarios/HorariosAdminForm";

const HorariosAdminItem = ({ data, onDelete }) => {
  const columns = [
    { key: "id", label: "Id" },
    { key: "veterinario", label: "Veterinario" },
    { key: "dia", label: "Día" },
    { key: "horaInicio", label: "Hora Inicio" },
    { key: "horaFin", label: "Hora Fin" },
  ];

  return (
    <HorariosForm
      title="Gestión de Horarios"
      category="horarios"
      data={data}
      columns={columns}
      onDelete={onDelete}
    />
  );
};

export default HorariosAdminItem;
