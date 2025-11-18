import { useState, useEffect } from "react";

const UsuarioForm = ({ onSubmit, initialData }) => {
  const [user, setUser] = useState({
    nombre: "",
    email: "",
    rol: "USER",
    telefono: "",
    direccion: "",
  });

  useEffect(() => {
    if (initialData) setUser(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={user.nombre}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
        required
      />
      <select name="rol" value={user.rol} onChange={handleChange}>
        <option value="USER">USER</option>
        <option value="ADMIN">ADMIN</option>
      </select>
      <input
        type="text"
        name="telefono"
        placeholder="Telefono"
        value={user.telefono}
        onChange={handleChange}
      />
      <input
        type="text"
        name="direccion"
        placeholder="Direccion"
        value={user.direccion}
        onChange={handleChange}
      />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default UsuarioForm;
