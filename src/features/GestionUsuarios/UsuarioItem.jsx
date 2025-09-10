import ListFormContainer from "../../components/ListFormContainer";
import { useState } from "react";

const UsuarioItem = () => {
  const [users, setUsers] = useState([
    { id: 1, nombre: "Juan Perez", email: "juan@mail.com", rol: "Admin" },
    { id: 2, nombre: "Maria Lopez", email: "maria@mail.com", rol: "Veterinario" },
  ]);

  const columns = [
    { key: "nombre", label: "Nombre" },
    { key: "email", label: "Email" },
    { key: "rol", label: "Rol" },
  ];

  const handleDelete = (user) => setUsers(users.filter((u) => u.id !== user.id));

  return (
    <ListFormContainer
      title="Gestión de Usuarios"
      columns={columns}
      data={users}
      onDelete={handleDelete}
    />
  );
};

export default UsuarioItem;
