import CitasAdminForm from "./CitasAdminForm";

const CitasAdminItem = ({ data, onDelete }) => {
  const columns = [
    { key: "id", label: "ID" },
    { key: "paciente", label: "Paciente" },
    { key: "propietario", label: "Propietario" },
    { key: "veterinario", label: "Veterinario" },
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
