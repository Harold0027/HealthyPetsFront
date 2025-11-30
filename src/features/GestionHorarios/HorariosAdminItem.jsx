import ListFormItem from ".//ListFormItem";
import HorariosForm from "./HorariosAdminForm";

const HorariosAdminItem = ({ data, onDelete, reload }) => {
  const columns = [
    { key: "id", label: "Id" },
    { key: "veterinarioNombre", label: "Veterinario" },
    { key: "dia", label: "Día" },
    { key: "horaInicio", label: "Hora Inicio" },
    { key: "horaFin", label: "Hora Fin" },
  ];

  return (
    <ListFormItem
      title="Gestión de Horarios"
      data={data}
      columns={columns}
      FormComponent={HorariosForm}
      onDelete={onDelete}
      reload={reload}
    />
  );
};

export default HorariosAdminItem;
