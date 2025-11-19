import ListFormItem from "../../components/ListFormItem";
import { Link } from "react-router-dom";

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
    <>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
        <h2>Gestión de Usuarios</h2>

        <Link to="/admin/usuarios/nuevo">
          <button>Nuevo Usuario</button>
        </Link>
      </div>

      <ListFormItem
        title="Usuarios"
        columns={columns}
        data={data}
        onDelete={onDelete}
        category="usuarios"
      />
    </>
  );
};

export default UsuarioItem;
