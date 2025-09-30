import ListFormItem from "./ListFormItem";

const ListFormContainer = ({title,columns,data,onDelete,category}) => {
    //aca se hara la conexion con la base de datos

  return (
    <ListFormItem
      title={title}
      columns={columns}
      data={data}
      onDelete={onDelete}
      category={category}
    />
  );
};

export default ListFormContainer;
