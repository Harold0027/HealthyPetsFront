import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Usuarios from "./pages/Usuarios";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/admin/usuarios" element={<Usuarios />} />
      </Routes>
    </Router>
  )
}

export default App
