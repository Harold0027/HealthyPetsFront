import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const NavbarAdmin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar-admin d-flex align-items-center justify-content-between px-4 py-2 shadow-sm bg-white">
      <Link to="/">
        <img src={logo} alt="logo" style={{ width: "3rem" }} />
      </Link>

      <div className="d-flex align-items-center gap-3">
        <Link to="/admin/usuarios" className="nav-link">Usuarios</Link>
        <Link to="/admin/veterinarios" className="nav-link">Veterinarios</Link>
        <Link to="/admin/pacientes" className="nav-link">Pacientes</Link>
        <Link to="/admin/horarios" className="nav-link">Horarios</Link>
        <Link to="/admin/citas" className="nav-link">Citas</Link>

        <button
          onClick={handleLogout}
          className="btn btn-danger btn-sm ms-3"
        >
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
