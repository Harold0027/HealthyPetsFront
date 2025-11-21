import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Usuarios from "./pages/Usuarios";
import VeterinariosAdmin from "./pages/VeterinariosAdmin";
import PacientesAdmin from "./pages/PacientesAdmin";
import HorariosAdmin from "./pages/HorariosAdmin";
import CitasAdmin from "./pages/CitasAdmin";
import Home from "./pages/Home";
import VeterinariosUser from "./pages/VeterinariosUser";
import Servicios from "./pages/Servicios";
import HistorialMedico from "./pages/HistorialMedico";
import CitasUser from "./pages/CitasUser";

// Login
import LoginContainer from "./features/Login/LoginContainer";

// Auth Context (CORREGIDO)
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>

          {/* ADMIN ROUTES */}
          <Route path="/admin/usuario" element={<Usuarios />} />
          <Route path="/admin/usuario/nuevo" element={<Usuarios />} />
          <Route path="/admin/usuario/editar" element={<Usuarios />} />
          <Route path="/admin/veterinarios" element={<VeterinariosAdmin />} />
          <Route path="/admin/pacientes" element={<PacientesAdmin />} />
          <Route path="/admin/horarios" element={<HorariosAdmin />} />
          <Route path="/admin/citas" element={<CitasAdmin />} />


          {/* USER ROUTES */}
          <Route path="/home" element={<Home />} />
          <Route path="/veterinarios" element={<VeterinariosUser />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/citas" element={<CitasUser />} />
          <Route path="/historial" element={<HistorialMedico />} />

          {/* LOGIN */}
          <Route path="/" element={<LoginContainer />} />

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
