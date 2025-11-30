import ListFormItem from "./ListFormItem";

const VeterinariosAdminItem = ({ data, onDelete, reload }) => {
  const columns = [
    { key: "id", label: "ID" },
    { key: "nombre", label: "Nombre" },
    { key: "especialidad", label: "Especialidad" },
    { key: "correo", label: "Correo" },
    { key: "telefono", label: "Teléfono" },
    { key: "direccion", label: "Dirección" },
  ];

  return (
    <ListFormItem
      title="Veterinarios"
      columns={columns}
      data={data}
      onDelete={onDelete}
      category="veterinarios"
      reload={reload}
    />
  );
};

export default VeterinariosAdminItem;
