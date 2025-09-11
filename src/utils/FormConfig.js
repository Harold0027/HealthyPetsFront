// src/utils/FormConfig.js
export const formConfigs = {
  usuarios: {
    columns: [ 
      { key: "id", label: "id" },
      { key: "nombre", label: "Nombre" },
      { key: "email", label: "Email" },
      { key: "rol", label: "Rol" },
      { key: "telefono", label: "Telefono" },
      { key: "direccion", label: "Direccion" },
    ],
  },
  veterinarios: {
    columns: [
      { key: "id", label: "Id" },
      { key: "nombre", label: "Nombre" },
      { key: "especialidad", label: "Especialidad" },
      { key: "correo", label: "Correo" },
      { key: "telefono", label: "Teléfono" },
      { key: "direccion", label: "Direccion" },
    ],
  },
  pacientes: {
    columns: [
      { key: "id", label: "Id" },
      { key: "dueño_id", label: "Dueño_id" },
      { key: "nombre", label: "Nombre" },
      { key: "especie", label: "Especie" },
      { key: "raza", label: "Raza" },
      { key: "edad", label: "Edad" },
      { key: "dueño", label: "Dueño" },
    ],
  },
  horarios: {
    columns: [
      { key: "id", label: "Id" },
      { key: "veterinario", label: "Veterinario" },
      { key: "dia", label: "Día" },
      { key: "horaInicio", label: "Hora Inicio" },
      { key: "horaFin", label: "Hora Fin" },
    ],
  },
  citas: {
    columns: [
      { key: "id", label: "id" },
      { key: "paciente", label: "Paciente" },
      { key: "propietario", label: "Propietario" },
      { key: "veterinario_id", label: "Veterinario (ID)" },
      { key: "mascota_id", label: "Mascota (ID)" },
      { key: "fecha", label: "Fecha" },
      { key: "hora", label: "Hora" },
      { key: "motivo", label: "Motivo" },
    ],
  },
};
