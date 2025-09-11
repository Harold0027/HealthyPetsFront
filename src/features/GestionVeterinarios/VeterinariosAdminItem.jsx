import ListFormContainer from "../../components/ListFormContainer";

const VeterinariosItem = () => {
  // Datos de prueba (luego vendrán del backend con fetch)
  const veterinarios = [
    { id: 1, nombre: "Dr. Pérez", especialidad: "Felinos", correo: "ejemplo1gmail.com",telefono: "987654321", direccion: "Los olivos" },
    { id: 2, nombre: "Dra. López", especialidad: "Caninos", correo: "ejempl2gmail.com",telefono: "912345678", direccion: "San miguel" },
    { id: 3, nombre: "Dr. Ramírez", especialidad: "Exóticos", correo: "ejemp3gmail.com",telefono: "900112233", direccion: "Comas" },
  ];

  // Columnas que queremos mostrar en la tabla
  const columns = [
    { key: "id", label: "Id" },
    { key: "nombre", label: "Nombre" },
    { key: "especialidad", label: "Especialidad" },
    { key: "correo", label: "Correo" },
    { key: "telefono", label: "Teléfono" },
    { key: "direccion", label: "Direccion" },
  ];

  return (
    <ListFormContainer
      title="Veterinarios"
      category= "veterinarios"
      data={veterinarios}
      columns={columns}
    />
  );
};

export default VeterinariosItem;
