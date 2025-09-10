import ListFormItem from "./ListFormItem";

const ListFormComponent = () => {
  // Datos estáticos de ejemplo
  const users = [
    { id: 1, nombre: "Juan Perez", email: "juan@mail.com", rol: "Administrador" },
    { id: 2, nombre: "Maria Lopez", email: "maria@mail.com", rol: "Veterinario" },
    { id: 3, nombre: "Carlos Ruiz", email: "carlos@mail.com", rol: "Recepcionista" },
  ];

  return (
    <div>
      <h2 className="mb-3">Gestión de Usuarios</h2>
      <button className="btn btn-primary mb-3">Nuevo Usuario</button>

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <ListFormItem
              key={user.id}
              nombre={user.nombre}
              email={user.email}
              rol={user.rol}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListFormComponent;
