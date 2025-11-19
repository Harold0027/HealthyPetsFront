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
      <input name="nombre" value={user.nombre} onChange={handleChange} placeholder="Nombre" required />
      <input name="email" value={user.email} onChange={handleChange} placeholder="Email" required />
      
      <select name="rol" value={user.rol} onChange={handleChange}>
        <option value="USER">USER</option>
        <option value="ADMIN">ADMIN</option>
      </select>

      <input name="telefono" value={user.telefono} onChange={handleChange} placeholder="Teléfono" />
      <input name="direccion" value={user.direccion} onChange={handleChange} placeholder="Dirección" />

      <button type="submit">Guardar</button>
    </form>
  );
};

export default UsuarioForm;
