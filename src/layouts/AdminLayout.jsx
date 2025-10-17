import Navbar from "./NavbarAdmin";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1 container my-4">
        <Outlet /> {}
      </main>
      <Footer />
    </div>
  );
};

export default AdminLayout;
