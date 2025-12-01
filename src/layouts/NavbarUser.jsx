import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import logo from "../assets/logo.png";
import { AuthContext } from "../context/authContext";

const NavbarUser = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-sm py-2 px-4 d-flex align-items-center justify-content-between">
      <Link to="/home">
        <img src={logo} alt="logo" style={{ width: "3rem" }} />
      </Link>

      <div className="d-flex gap-4 align-items-center">

        <Link className="text-decoration-none text-success fw-semibold" to="/nosotros">
          Nosotros
        </Link>

        <Link className="text-decoration-none text-success fw-semibold" to="/veterinarios">
          Staff
        </Link>

        <Link className="text-decoration-none text-success fw-semibold" to="/servicios">
          Servicios
        </Link>

        <Link className="text-decoration-none text-success fw-semibold" to="/citas">
          Citas
        </Link>


        {!user ? (
          <Link
            className="btn btn-success px-3 py-1"
            to="/"
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
