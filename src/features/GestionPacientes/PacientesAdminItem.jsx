import ListFormItem from "./ListFormItem";

const PacientesAdminItem = ({ data, onDelete, reload }) => {
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
    <ListFormItem
      title="Pacientes"
      columns={columns}
      data={data}
      onDelete={onDelete}
      category="pacientes"
      reload={reload}
    />
  );
};

export default PacientesAdminItem;
