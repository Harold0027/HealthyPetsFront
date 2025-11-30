import { Table, Button, Card } from "react-bootstrap";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { useState } from "react";
import VeterinariosForm from "./VeterinariosAdminItemForm";

const ListFormItem = ({ title, columns, data, onDelete, category, reload }) => {
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleClose = () => {
    setShowModal(false);
    setEditData(null);
  };

  const handleEdit = (item) => {
    setEditData(item);
    setShowModal(true);
  };

  const handleCreate = () => {
    setEditData(null);
    setShowModal(true);
  };

  return (
    <>
      <Card className="shadow-sm mb-4">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <h4>{title}</h4>
          <Button variant="dark" onClick={handleCreate} className="d-flex align-items-center gap-2">
            <FaPlus /> Agregar
          </Button>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover responsive className="align-middle">
            <thead className="table-dark">
              <tr>
                {columns.map((col) => (
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
                data.map((item) => (
                  <tr key={item.id}>
                    {columns.map((col) => (
                      <td key={col.key} className="text-center">
                        {col.key === "imagenUrl" && item[col.key] ? (
                          <img
                            src={item[col.key]}
                            alt={item.nombre}
                            style={{ width: "50px", borderRadius: "50%" }}
                          />
                        ) : (
                          item[col.key]
                        )}
                      </td>
                    ))}
                    <td className="text-center">
                      <Button
                        variant="warning"
                        size="sm"
                        className="me-2"
                        onClick={() => handleEdit(item)}
                      >
                        <FaEdit /> Editar
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => onDelete(item.id)}
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

      {showModal && (
        <VeterinariosForm
          show={showModal}
          onClose={handleClose}
          initialData={editData}
          reload={reload}
        />
      )}
    </>
  );
};

export default ListFormItem;
