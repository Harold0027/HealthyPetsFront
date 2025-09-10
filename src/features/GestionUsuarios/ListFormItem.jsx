const ListFormItem = ({ nombre, email, rol }) => {
  return (
    <tr>
      <td>{nombre}</td>
      <td>{email}</td>
      <td>{rol}</td>
      <td>
        <button className="btn btn-warning btn-sm me-2">Editar</button>
        <button className="btn btn-danger btn-sm">Eliminar</button>
      </td>
    </tr>
  );
};

export default ListFormItem;