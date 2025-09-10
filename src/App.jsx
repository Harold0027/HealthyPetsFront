import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Usuarios from "./pages/Usuarios";
import VeterinariosAdmin from "./pages/VeterianriosAdmin"
import PacientesAdmin from "./pages/PacientesAdmin"
import HorariosAdmin from "./pages/HorariosAdmin"
import CitasAdmin from "./pages/CitasAdmin";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/admin/usuarios" element={<Usuarios />} />
        <Route path="/admin/veterinarios" element={<VeterinariosAdmin />} />
        <Route path="/admin/pacientes" element={<PacientesAdmin />} />
        <Route path="/admin/horarios" element={<HorariosAdmin />} />
        <Route path="/admin/citas" element={<CitasAdmin />} />
      </Routes>
    </Router>
  )
}

export default App
