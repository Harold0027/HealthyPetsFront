import { useState } from "react";
import { Table, Button, Card, Modal } from "react-bootstrap";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import UsuarioForm from "./UsuarioForm";

const ListFormItem = ({ title, columns, data, onDelete, reload }) => {
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleClose = () => {
    setShowModal(false);
    setEditData(null);
  };

  const handleCreate = () => {
    setEditData(null);
    setShowModal(true);
  };

  const handleEdit = (item) => {
    setEditData(item);
    setShowModal(true);
  };

  return (
    <>
      <Card className="shadow-sm mb-4 border-0">
        <Card.Header className="d-flex justify-content-between align-items-center bg-dark text-white">
          <h4 className="mb-0">{title}</h4>
          <Button variant="light" onClick={handleCreate} className="d-flex align-items-center gap-2">
            <FaPlus /> Agregar
          </Button>
        </Card.Header>

        <Card.Body className="p-0">
          <Table striped bordered hover responsive className="align-middle mb-0">
            <thead className="table-dark">
              <tr>
                {columns.map((col) => (
                  <th key={col.key} className="text-center">
                    {col.label}
                  </th>
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
                        {col.renderer ? col.renderer(item) : item[col.key]}
                      </td>
                    ))}
                    <td className="text-center">
                      <Button
                        variant="warning"
                        size="sm"
                        className="me-2 d-flex align-items-center gap-1"
                        onClick={() => handleEdit(item)}
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

      <Modal
        show={showModal}
        onHide={handleClose}
        size="lg"
        centered
        backdrop="static"
        keyboard={false}
        className="rounded"
      >
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title>{editData ? "Editar Usuario" : "Crear Usuario"}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4 bg-light">
          <UsuarioForm initialData={editData} onSubmit={reload} onClose={handleClose} />
        </Modal.Body>
        <Modal.Footer className="justify-content-center bg-light">
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ListFormItem;
