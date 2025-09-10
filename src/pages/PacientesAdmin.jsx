import AdminLayout from "../layouts/AdminLayout";
import PacientesAdminItem from "../features/GestionPacientes/PacientesAdminItems"

const PacientesAdmin = () => {
  return (
    <div>
       <AdminLayout>
            <PacientesAdminItem />
        </AdminLayout>
    </div>
  )
}

export default PacientesAdmin
