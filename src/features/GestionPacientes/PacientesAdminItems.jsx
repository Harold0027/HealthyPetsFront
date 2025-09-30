import { useState } from "react";
import ListFormContainer from "../../components/ListFormContainer";

const PacientesAdminItem = () => {
  // Datos de prueba (luego reemplazamos con fetch al backend)
  const [pacientes, setPacientes] = useState([
    { id: 1,dueño_id: 23 ,nombre: "Firulais", especie: "Perro",raza:"pitbul" , edad: 3, dueño: "Juan Pérez" },
    { id: 2,dueño_id: 33 ,nombre: "Michi", especie: "Gato",raza: "normal", edad: 2, dueño: "Ana López" },
    { id: 3,dueño_id: 25 ,nombre: "Max", especie: "Conejo",raza: "normal", edad: 1, dueño: "Carlos Ramírez" },
  ]);

  // Columnas de la tabla (pueden variar según tu backend)
  const columns = [
    { key: "id", label: "Id" },
    { key: "dueño_id", label: "Dueño_id" },
    { key: "nombre", label: "Nombre" },
    { key: "especie", label: "Especie" },
    { key: "raza", label: "Raza" },
    { key: "edad", label: "Edad" },
    { key: "dueño", label: "Dueño" },
  ];

  const handleDelete = (paciente) => setPacientes(pacientes.filter((p)=>p.id !== paciente.id)); 
  
  return (
    <ListFormContainer
      title="Gestion de pacientes"
      category= "pacientes"
      data={pacientes}
      columns={columns}
      onDelete={handleDelete}
    />
  );
};

export default PacientesAdminItem;
