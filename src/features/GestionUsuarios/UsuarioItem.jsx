import ListFormItem from "../../components/ListFormItem";

const UsuarioItem = ({ data, onDelete }) => {
  const columns = [
    { key: "id", label: "ID" },
    { key: "nombre", label: "Nombre" },
    { key: "email", label: "Email" },
    { key: "rol", label: "Rol" },
    { key: "telefono", label: "Telefono" },
    { key: "direccion", label: "Direccion" },
  ];

  return (
    <ListFormItem
      title="Gestión de Usuarios"
      columns={columns}
      data={data}
      onDelete={onDelete}
      category="usuarios"
    />
  );
};

export default UsuarioItem;
