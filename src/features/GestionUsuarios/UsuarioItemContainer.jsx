import { useState, useEffect } from "react";
import UsuarioItem from "./UsuarioItem";
import { UsuariosService } from "../../services/UsuariosService";

const UsuarioItemContainer = () => {
  const [usuarios, setUsuarios] = useState([]);

  const fetchUsuarios = async () => {
    try {
      const data = await UsuariosService.getAll();
      setUsuarios(data);
    } catch (error) {
      console.error("Error cargando usuarios:", error);
    }
  };

  const handleDelete = async (user) => {
    try {
      await UsuariosService.remove(user.id);
      setUsuarios(usuarios.filter((u) => u.id !== user.id));
    } catch (error) {
      console.error("Error eliminando usuario:", error);
    }
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  return <UsuarioItem data={usuarios} onDelete={handleDelete} />;
};

export default UsuarioItemContainer;
