// src/pages/Nuevo.jsx
import { useParams } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import DynamicForm from "../components/FormDinamico";

// simulación de config para cada category
import { formConfigs } from "../utils/FormConfig";

const Nuevo = () => {
  const { category } = useParams();
  const config = formConfigs[category];

  const handleCreate = (data) => {
    console.log("Nuevo registro en", category, data);
    // aquí iría fetch POST -> /api/{category}
  };

  return (
    <AdminLayout>
      <h2>Crear nuevo {category}</h2>
      <DynamicForm columns={config.columns} onSubmit={handleCreate} />
    </AdminLayout>
  );
};

export default Nuevo;
