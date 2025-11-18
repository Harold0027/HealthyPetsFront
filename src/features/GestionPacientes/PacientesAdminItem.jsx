import PacientesForm from "./PacientesForm";

const PacientesAdminItem = ({ data, onDelete }) => {
  const columns = [
    { key: "id", label: "Id" },
    { key: "dueño_id", label: "Dueño_id" },
    { key: "nombre", label: "Nombre" },
    { key: "especie", label: "Especie" },
    { key: "raza", label: "Raza" },
    { key: "edad", label: "Edad" },
    { key: "dueño", label: "Dueño" },
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
