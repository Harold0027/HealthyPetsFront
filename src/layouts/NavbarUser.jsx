import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import logo from "../assets/logo.png";
import { AuthContext } from "../context/authContext";

const NavbarUser = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-sm py-2 px-4 d-flex align-items-center justify-content-between">
      <Link to="/">
        <img src={logo} alt="logo" style={{ width: "3rem" }} />
      </Link>

      <div className="d-flex gap-4 align-items-center">

        <Link className="text-decoration-none text-success fw-semibold" to="/veterinarios">
          Veterinarios
        </Link>

        <Link className="text-decoration-none text-success fw-semibold" to="/servicios">
          Servicios
        </Link>

        <Link className="text-decoration-none text-success fw-semibold" to="/citas">
          Citas
        </Link>

        <Link className="text-decoration-none text-success fw-semibold" to="/historial">
          Historial
        </Link>

        <Link className="text-success fs-5" to="/notificaciones">
          🔔
        </Link>

        {/* 🔥 BOTÓN LOGIN / LOGOUT SEGÚN TOKEN */}
        {!user ? (
          <Link
            className="btn btn-success px-3 py-1"
            to="/login"
          >
            Iniciar Sesión
          </Link>
        ) : (
          <button
            className="btn btn-outline-danger px-3 py-1"
            onClick={handleLogout}
          >
            Cerrar Sesión
          </button>
        )}

      </div>
    </nav>
  );
};

export default NavbarUser;
