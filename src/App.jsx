import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Usuarios from "./pages/Usuarios";
import VeterinariosAdmin from "./pages/VeterinariosAdmin";
import PacientesAdmin from "./pages/PacientesAdmin";
import HorariosAdmin from "./pages/HorariosAdmin";
import CitasAdmin from "./pages/CitasAdmin";
import Home from "./pages/Home";
import VeterinariosUser from "./pages/VeterinariosUser";
import Servicios from "./pages/Servicios";
import CitasUser from "./pages/CitasUser";
import Nosotros from "./pages/Nosotros";
import LoginContainer from "./features/Login/LoginContainer";
import { AuthProvider } from "./context/authContext";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>

          {/* ADMIN ROUTES */}
          <Route path="/admin/usuario" element={<Usuarios />} />
          <Route path="/admin/veterinarios" element={<VeterinariosAdmin />} />
          <Route path="/admin/pacientes" element={<PacientesAdmin />} />
          <Route path="/admin/horarios" element={<HorariosAdmin />} />
          <Route path="/admin/citas" element={<CitasAdmin />} />


          {/* USER ROUTES */}
          <Route path="/home" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/veterinarios" element={<VeterinariosUser />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/citas" element={<CitasUser />} />

          {/* LOGIN */}
          <Route path="/" element={<LoginContainer />} />

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
