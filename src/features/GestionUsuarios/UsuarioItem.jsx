import ListFormContainer from "../../components/ListFormContainer";
import { useState } from "react";

const UsuarioItem = () => {
  const [users, setUsers] = useState([ 
    { id: 1,
      nombre: "Juan Perez", 
      email: "juan@gmail.com", 
      rol: "Admin", 
      telefono: 92382322, 
      direccion: "San luis" 
    },
    { id: 2,
      nombre: "Maria Lopez",
      email: "maria@gmail.com",
      rol: "user",
      telefono: 923825622, 
      direccion: "San Miguel"
         },
    { id: 3,
      nombre: "Mario Lopez",
      email: "mariol@gmail.com",
      rol: "user",
      telefono: 923125626, 
      direccion: "San Miguel"
         },
  ]);

  const columns = [
    { key: "id", label: "id" },
    { key: "nombre", label: "Nombre" },
    { key: "email", label: "Email" },
    { key: "rol", label: "Rol" },
    { key: "telefono", label: "Telefono" },
    { key: "direccion", label: "Direccion" },
  ];

  const handleDelete = (user) => setUsers(users.filter((u) => u.id !== user.id));

  return (
    <ListFormContainer
      title="Gestión de Usuarios"
      category= "usuarios"
      columns={columns}
      data={users}
      onDelete={handleDelete}
    />
  );
};

export default UsuarioItem;
