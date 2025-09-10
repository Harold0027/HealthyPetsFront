import ListFormItem from "./ListFormItem";

const ListFormContainer = ({title,columns,data,onDelete}) => {


  return (
    <ListFormItem
      title={title}
      columns={columns}
      data={data}
      onDelete={onDelete}
    />
  );
};

export default ListFormContainer;
