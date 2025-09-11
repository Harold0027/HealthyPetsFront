import ListFormItem from "./ListFormItem";

const ListFormContainer = ({title,columns,data,onDelete,category}) => {


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
