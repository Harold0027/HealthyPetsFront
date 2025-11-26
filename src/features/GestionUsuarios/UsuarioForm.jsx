import { useState, useEffect } from "react";
import { UsuariosService } from "../../services/UsuariosService";

const UsuarioForm = ({ initialData, onSubmit, onClose }) => {
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
      setUser({ ...initialData, password: "" });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (initialData) {
        await UsuariosService.update(initialData.id, user);
      } else {
        await UsuariosService.create(user);
      }
      onSubmit(); // recarga la lista
      onClose();  // cierra modal
    } catch (err) {
      console.error("Error guardando usuario:", err);
      alert("Error al guardar el usuario");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="fullName" placeholder="Nombre" value={user.fullName} onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" value={user.email} onChange={handleChange} required />
      {!initialData && <input name="password" type="password" placeholder="Contraseña" value={user.password} onChange={handleChange} required />}
      <select name="role" value={user.role} onChange={handleChange}>
        <option value="USER">USER</option>
        <option value="ADMIN">ADMIN</option>
      </select>
      <input name="telefono" placeholder="Teléfono" value={user.telefono} onChange={handleChange} />
      <input name="direccion" placeholder="Dirección" value={user.direccion} onChange={handleChange} />
      <button type="submit">{initialData ? "Actualizar" : "Crear"}</button>
      <button type="button" onClick={onClose} style={{ marginLeft: "10px" }}>Cancelar</button>
    </form>
  );
};

export default UsuarioForm;
