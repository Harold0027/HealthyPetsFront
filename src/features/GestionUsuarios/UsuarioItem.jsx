import ListFormItem from "./ListFormItem";

const UsuarioItem = ({ data, onDelete }) => {
  const columns = [
    { key: "id", label: "ID" },
    { key: "fullName", label: "Nombre" },
    { key: "email", label: "Email" },
    { key: "role", label: "Rol" },
    { key: "telefono", label: "Teléfono" },
    { key: "direccion", label: "Dirección" },
  ];

  return (
    <ListFormItem
      title="Usuarios"
      columns={columns}
      data={data}
      onDelete={onDelete}
      category="usuarios"
    />
  );
};

export default UsuarioItem;
