import CitasAdminForm from "./CitasAdminForm";

const CitasAdminItem = ({ data, onDelete }) => {
  const columns = [
    { key: "id", label: "Id" },
    { key: "paciente", label: "Paciente" },
    { key: "propietario", label: "Propietario" },
    { key: "veterinario_id", label: "Veterinario (ID)" },
    { key: "mascota_id", label: "Mascota (ID)" },
    { key: "fecha", label: "Fecha" },
    { key: "hora", label: "Hora" },
    { key: "motivo", label: "Motivo" },
  ];

  return (
    <CitasAdminForm
      title="Gestión de Citas"
      category="citas"
      data={data}
      columns={columns}
      onDelete={onDelete}
    />
  );
};

export default CitasAdminItem;
