// src/pages/Servicios.jsx
import Navbar from "../layouts/NavbarUser";
import Footer from "../layouts/Footer";
import ServiciosList from "../features/GestionServicios/ServiciosList";

export default function Servicios() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 p-6 max-w-6xl mx-auto">
        <ServiciosList />
      </main>
      <Footer />
    </div>
  );
}
