import ListFormContainer from "../../components/ListFormContainer";

const VeterinariosItem = () => {
  // Datos de prueba (luego vendrán del backend con fetch)
  const veterinarios = [
    { id: 1, nombre: "Dr. Pérez", especialidad: "Felinos", telefono: "987654321" },
    { id: 2, nombre: "Dra. López", especialidad: "Caninos", telefono: "912345678" },
    { id: 3, nombre: "Dr. Ramírez", especialidad: "Exóticos", telefono: "900112233" },
  ];

  // Columnas que queremos mostrar en la tabla
  const columns = [
    { key: "nombre", label: "Nombre" },
    { key: "especialidad", label: "Especialidad" },
    { key: "telefono", label: "Teléfono" },
  ];

  return (
    <ListFormContainer
      title="Veterinarios"
      data={veterinarios}
      columns={columns}
    />
  );
};

export default VeterinariosItem;
