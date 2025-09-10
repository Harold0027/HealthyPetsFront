import { Link } from "react-router-dom";

const ListFormItem = ({title,columns,data,onDelete}) => {

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mb-0">{title}</h2>
      </div>
      <Link to='/admin/usuarios/nuevo' className='btn btn-dark'>Nuevo</Link>

      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.key}>{col.label}</th>
              ))}
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length + 1} className="text-center">
                  No hay registros
                </td>
              </tr>
            ) : (
              data.map((item) => (
                <tr key={item.id ?? item._id}>
                  {columns.map((col) => (
                    <td key={col.key + (item.id ?? item._id)}>
                      {col.renderer
                        ? col.renderer(item)
                        : col.key.split(".").reduce((o, k) => (o ? o[k] : ""), item)}
                    </td>
                  ))}
                  <td>
                    <Link to='/admin/usuarios/editar' className='btn btn-warning btn-sm'>Editar</Link>
                    <button className="btn btn-danger btn-sm" onClick={() => onDelete(item)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListFormItem;
