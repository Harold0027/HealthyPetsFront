import NavbarUser from "../layouts/NavbarUser";
import Footer from "../layouts/Footer";
import VeterinariosList from "../features/GestionVeterinarios/VeterinariosList";

export default function VeterinariosUser() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <NavbarUser />
      <main className="flex-grow-1 py-4">
        <div className="container">
          <h2 className="text-2xl fw-semibold text-success mb-4 text-center">
            Nuestros Veterinarios
          </h2>
          <VeterinariosList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
