import { useEffect, useState } from "react";
import HorariosUserList from "./HorariosUserList";
import { getHorarios } from "../../services/HorariosService";

const HorariosUserListContainer = () => {
  const [horarios, setHorarios] = useState([]);

  const fetchHorarios = async () => {
    try {
      const res = await getHorarios();
      setHorarios(res);
    } catch (error) {
      console.error("Error cargando horarios:", error);
    }
  };

  useEffect(() => {
    fetchHorarios();
  }, []);

  return <HorariosUserList horarios={horarios} />;
};

export default HorariosUserListContainer;
