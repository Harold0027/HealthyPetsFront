import AdminLayout from "../layouts/AdminLayout";
import PacientesAdminItemContainer from "../features/GestionPacientes/PacientesAdminItemContainer";

const PacientesAdmin = () => {
  return (
    <AdminLayout>
      <PacientesAdminItemContainer />
    </AdminLayout>
  );
};

export default PacientesAdmin;
