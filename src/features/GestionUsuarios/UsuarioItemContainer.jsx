import { useState, useEffect } from "react";
import ListFormItem from "./ListFormItem";
import { UsuariosService } from "../../services/UsuariosService";

const UsuarioItemContainer = () => {
  const [usuarios, setUsuarios] = useState([]);

  const fetchUsuarios = async () => {
    try {
      const data = await UsuariosService.getAll();
      setUsuarios(data);
    } catch (err) {
      console.error("Error cargando usuarios:", err);
    }
  };

  const handleDelete = async (user) => {
    if (!window.confirm(`¿Eliminar al usuario ${user.fullName}?`)) return;
    try {
      await UsuariosService.remove(user.id);
      fetchUsuarios();
    } catch (err) {
      console.error("Error eliminando usuario:", err);
    }
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const columns = [
    { key: "id", label: "ID" },
    { key: "fullName", label: "Nombre" },
    { key: "email", label: "Email" },
    { key: "role", label: "Rol" },
    { key: "telefono", label: "Teléfono" },
    { key: "direccion", label: "Dirección" },
  ];

  return <ListFormItem title="Usuarios" columns={columns} data={usuarios} onDelete={handleDelete} reload={fetchUsuarios} />;
};

export default UsuarioItemContainer;
