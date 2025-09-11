// src/pages/Editar.jsx
import { useParams } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import DynamicForm from "../components/FormDinamico";
import { formConfigs } from "../utils/FormConfig";

const EditFormPage = () => {
  const { category, id } = useParams();
  const config = formConfigs[category];

  // Simulación de fetch existente
  const existingData = { id, nombre: "Ejemplo", email: "ejemplo@mail.com", rol: "Admin" };

  const handleUpdate = (data) => {
    console.log("Actualizar", category, id, data);
    // aquí iría fetch PUT -> /api/{category}/{id}
  };

  return (
    <AdminLayout>
      <h2>Editar {category} #{id}</h2>
      <DynamicForm columns={config.columns} initialData={existingData} onSubmit={handleUpdate} />
    </AdminLayout>
  );
};

export default EditFormPage;
