import PacientesForm from "./PacientesForm";

const PacientesAdminItem = ({ data, onDelete }) => {
  const columns = [
    { key: "id", label: "ID" },
    { key: "duenoId", label: "Propietario ID" },
    { key: "nombre", label: "Nombre" },
    { key: "especie", label: "Especie" },
    { key: "raza", label: "Raza" },
    { key: "edad", label: "Edad" },
    { key: "duenoNombre", label: "Propietario" },
  ];

  return (
    <PacientesForm
      title="Gestión de Pacientes"
      category="pacientes"
      data={data}
      columns={columns}
      onDelete={onDelete}
    />
  );
};

export default PacientesAdminItem;
