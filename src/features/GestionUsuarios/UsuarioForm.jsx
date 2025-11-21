import { useState, useEffect } from "react";

const UsuarioForm = ({ initialData, onSubmit }) => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "USER",
    telefono: "",
    direccion: "",
  });

  useEffect(() => {
    if (initialData) {
      setUser({
        ...initialData,
        password: "", // No mostrar password existente
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="fullName"
        placeholder="Nombre"
        value={user.fullName}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
        required
      />

      {!initialData && (
        <input
          name="password"
          type="password"
          placeholder="Contraseña"
          value={user.password}
          onChange={handleChange}
          required
        />
      )}

      <select
        name="role"
        value={user.role}
        onChange={handleChange}
      >
        <option value="USER">USER</option>
        <option value="ADMIN">ADMIN</option>
      </select>

      <input
        name="telefono"
        placeholder="Teléfono"
        value={user.telefono}
        onChange={handleChange}
      />

      <input
        name="direccion"
        placeholder="Dirección"
        value={user.direccion}
        onChange={handleChange}
      />

      <button type="submit">{initialData ? "Actualizar" : "Crear"}</button>
    </form>
  );
};

export default UsuarioForm;
