import VeterinariosAdminForm from "../GestionVeterinarios/VeterinariosAdminItemForm";

const VeterinariosAdminItem = ({ data, onDelete }) => {
  const columns = [
    { key: "id", label: "Id" },
    { key: "nombre", label: "Nombre" },
    { key: "especialidad", label: "Especialidad" },
    { key: "correo", label: "Correo" },
    { key: "telefono", label: "Teléfono" },
    { key: "direccion", label: "Direccion" },
  ];

  return (
    <VeterinariosAdminForm
      title="Gestión de Veterinarios"
      category="veterinarios"
      data={data}
      columns={columns}
      onDelete={onDelete}
    />
  );
};

export default VeterinariosAdminItem;
