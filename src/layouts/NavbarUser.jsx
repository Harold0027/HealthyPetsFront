import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavbarUser = () => {
  return (
    <nav className="bg-white shadow-sm py-2 px-4 d-flex align-items-center justify-content-between">
      <Link to="/">
        <img src={logo} alt="logo" style={{ width: "3rem" }} />
      </Link>

      <div className="d-flex gap-4">
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
      </div>
    </nav>
  );
};

export default NavbarUser;
