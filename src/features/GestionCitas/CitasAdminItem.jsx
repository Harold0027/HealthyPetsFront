import ListFormItem from "./ListFormItem";
import CitasAdminForm from "./CitasAdminForm";

const CitasAdminItem = ({ data, onDelete, reload }) => {
  const columns = [
    { key: "id", label: "ID" },
    { key: "pacienteNombre", label: "Paciente" },
    { key: "duenoNombre", label: "Propietario" },
    { key: "fecha", label: "Fecha" },
    { key: "hora", label: "Hora" },
    { key: "motivo", label: "Motivo" },
  ];

  return (
    <ListFormItem
      title="Gestión de Citas"
      data={data}
      columns={columns}
      FormComponent={CitasAdminForm}
      onDelete={onDelete}
      reload={reload}
    />
  );
};

export default CitasAdminItem;
