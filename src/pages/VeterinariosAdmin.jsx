import AdminLayout from "../layouts/AdminLayout";
import VeterinariosAdminItemContainer from "../features/GestionVeterinarios/VeterinariosAdminItemContainer";

const VeterinariosAdmin = () => {
  return (
    <AdminLayout>
      <VeterinariosAdminItemContainer />
    </AdminLayout>
  );
};

export default VeterinariosAdmin;
