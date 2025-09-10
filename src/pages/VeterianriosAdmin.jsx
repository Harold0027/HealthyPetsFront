import AdminLayout from "../layouts/AdminLayout"
import VeterinariosAdminItem from "../features/GestionVeterinarios/VeterinariosAdminItem"

const VeterianriosAdmin = () => {
  return (
    <div>
        <AdminLayout>
            <VeterinariosAdminItem />
        </AdminLayout>
    </div>
  )
}

export default VeterianriosAdmin
