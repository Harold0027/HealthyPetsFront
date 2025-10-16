import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Usuarios from "./pages/Usuarios";
import VeterinariosAdmin from "./pages/VeterianriosAdmin"
import PacientesAdmin from "./pages/PacientesAdmin"
import HorariosAdmin from "./pages/HorariosAdmin"
import CitasAdmin from "./pages/CitasAdmin";
import Editar from "./pages/Editar"
import Nuevo from "./pages/Nuevo"
import Home from "./pages/Home"
import VeterinariosUser from "./pages/VeterinariosUser";
import Servicios from "./pages/Servicios"
import HistorialMedico from "./pages/HistorialMedico";
import CitasUser from "./pages/CitasUser";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/admin/usuarios" element={<Usuarios />} />
        <Route path="/admin/veterinarios" element={<VeterinariosAdmin />} />
        <Route path="/admin/pacientes" element={<PacientesAdmin />} />
        <Route path="/admin/horarios" element={<HorariosAdmin />} />
        <Route path="/admin/citas" element={<CitasAdmin />} />
        <Route path="/admin/:category/nuevo" element={<Nuevo />} />
        <Route path="/admin/:category/editar/:id" element={<Editar />} />
        
        <Route path="/" element={<Home />} />
        <Route path="/veterinarios" element={<VeterinariosUser />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/citas" element={<CitasUser />} />
        <Route path="/historial" element={<HistorialMedico />} />
        

      </Routes>
    </Router>
  )
}

export default App
