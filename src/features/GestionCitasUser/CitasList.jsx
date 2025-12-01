import { useState, useEffect, useContext } from "react";
import HorariosDisponibles from "./HorariosDisponibles";
import { CitasService } from "../../services/CitasService";
import { getHorarios } from "../../services/HorarioService"; 
import { AuthContext } from "../../context/authContext";

const CitasList = () => {
  const { user } = useContext(AuthContext);

  const [horarios, setHorarios] = useState([]);

  const fetchHorarios = async () => {
    try {
      const data = await getHorarios();
      setHorarios(data);
    } catch (error) {
      console.error("Error cargando horarios:", error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchHorarios();
    }
  }, [user]);

  return (
    <div className="container-fluid py-5">
      <div
        className="d-flex w-100"
        style={{ gap: "2rem", alignItems: "flex-start" }}
      >
        <div
          style={{
            flex: 1,
            minHeight: "400px",
            maxHeight: "600px",
            overflowY: "auto",
            padding: "1rem",
            backgroundColor: "#f8f9fa",
            borderRadius: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
          }}
        >
          <h2
            className="text-center mb-4"
            style={{ color: "#2F6F99", fontWeight: "bold" }}
          >
            Horarios Disponibles
          </h2>
          <HorariosDisponibles horarios={horarios} />
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "1rem",
          }}
        >
          <img
            src="https://www.clinicaveterinariaejea.com/wp-content/uploads/2020/03/Equipo-Clinica-Veterinaria-Ejea-1.jpeg"
            alt="Veterinario con mascota"
            style={{
              width: "100%",
              maxHeight: "300px",
              objectFit: "cover",
              borderRadius: "12px",
              marginBottom: "1.5rem"
            }}
          />
          <h3
            className="text-center mb-3"
            style={{ color: "#198754", fontWeight: "700" }}
          >
            ¡Cita con los mejores doctores! 🐾
          </h3>
          <p
            className="text-center mb-4"
            style={{ fontSize: "1.1rem", lineHeight: "1.5" }}
          >
            Nuestro equipo veterinario altamente capacitado está listo para cuidar
            de tu mascota. Revisa los horarios disponibles y agenda tu cita de
            manera rápida y sencilla vía WhatsApp. 📲🐶🐱
          </p>
          <a
            href="https://wa.link/6vibgv"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success btn-lg w-100 py-3"
            style={{
              fontSize: "1.2rem",
              fontWeight: "600",
              borderRadius: "10px",
            }}
          >
            Agendar Cita vía WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default CitasList;
