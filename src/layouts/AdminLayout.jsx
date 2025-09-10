import Navbar from "./NavbarAdmin";
import Footer from "./Footer";

const AdminLayout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1 container my-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default AdminLayout;
