import ListFormContainer from "../../components/ListFormContainer";

const PacientesAdminItem = () => { 
  // Datos de prueba (luego reemplazamos con fetch al backend)
  const pacientes = [
    { id: 1, nombre: "Firulais", especie: "Perro", edad: 3, dueño: "Juan Pérez" },
    { id: 2, nombre: "Michi", especie: "Gato", edad: 2, dueño: "Ana López" },
    { id: 3, nombre: "Max", especie: "Conejo", edad: 1, dueño: "Carlos Ramírez" },
  ];

  // Columnas de la tabla (pueden variar según tu backend)
  const columns = [
    { key: "nombre", label: "Nombre" },
    { key: "especie", label: "Especie" },
    { key: "edad", label: "Edad" },
    { key: "dueño", label: "Dueño" },
  ];
  const handleDelete = (id) => {
    setPacientes((prev) => prev.filter((p) => p.id !== id));
  };
  return (
    <ListFormContainer
      title="Pacientes"
      data={pacientes}
      columns={columns}
      onDelete={handleDelete}
    />
  );
};

export default PacientesAdminItem;
