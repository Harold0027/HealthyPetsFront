import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Usuarios from "./pages/Usuarios";
import VeterinariosAdmin from "./pages/VeterianriosAdmin";
import PacientesAdmin from "./pages/PacientesAdmin";
import HorariosAdmin from "./pages/HorariosAdmin";
import CitasAdmin from "./pages/CitasAdmin";
import Editar from "./pages/Editar";
import Nuevo from "./pages/Nuevo";
import Home from "./pages/Home";
import VeterinariosUser from "./pages/VeterinariosUser";
import Servicios from "./pages/Servicios";
import HistorialMedico from "./pages/HistorialMedico";
import CitasUser from "./pages/CitasUser";
import AdminLayout from "./layouts/AdminLayout";
import PrivateRoute from "./utils/PrivateRoute";
import Login from "./pages/Login"; // Asegúrate de tener este componente

function App() {
  return (
    <Router>
      <Routes>
        {/* Página pública */}
        <Route path="/" element={<Home />} />
        <Route path="/veterinarios" element={<VeterinariosUser />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/citas" element={<CitasUser />} />
        <Route path="/historial" element={<HistorialMedico />} />

        {/* Página de login */}
        <Route path="/login" element={<Login />} />

        {/* Rutas protegidas bajo AdminLayout */}
        <Route element={<PrivateRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="usuarios" element={<Usuarios />} />
            <Route path="veterinarios" element={<VeterinariosAdmin />} />
            <Route path="pacientes" element={<PacientesAdmin />} />
            <Route path="horarios" element={<HorariosAdmin />} />
            <Route path="citas" element={<CitasAdmin />} />
            <Route path=":category/nuevo" element={<Nuevo />} />
            <Route path=":category/editar/:id" element={<Editar />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
