import { Table, Button, Card } from "react-bootstrap";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const CitasAdminForm = ({ title, columns, data, onDelete, category }) => {
  return (
    <Card className="shadow-sm mb-4">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h4>{title}</h4>
        <Button
          as={Link}
          to={`/admin/${category}/nuevo`}
          variant="dark"
          className="d-flex align-items-center gap-2"
        >
          <FaPlus /> Agregar
        </Button>
      </Card.Header>
      <Card.Body>
        <Table striped bordered hover responsive className="align-middle">
          <thead className="table-dark">
            <tr>
              {columns.map(col => (
                <th key={col.key} className="text-center">{col.label}</th>
              ))}
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length + 1} className="text-center text-muted py-4">
                  No hay registros
                </td>
              </tr>
            ) : (
              data.map(item => (
                <tr key={item.id}>
                  {columns.map(col => (
                    <td key={col.key} className="text-center">{item[col.key]}</td>
                  ))}
                  <td className="text-center">
                    <Button
                      as={Link}
                      to={`/admin/${category}/editar/${item.id}`}
                      variant="warning"
                      size="sm"
                      className="me-2 d-flex align-items-center gap-1"
                    >
                      <FaEdit /> Editar
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      className="d-flex align-items-center gap-1"
                      onClick={() => onDelete(item)}
                    >
                      <FaTrash /> Eliminar
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default CitasAdminForm;
