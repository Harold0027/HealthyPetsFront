import { useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import { FaPlus, FaTrash } from "react-icons/fa";

const ListFormItem = ({ title, data, columns, FormComponent, onDelete, reload }) => {
  const [show, setShow] = useState(false);

  const openNew = () => setShow(true);
  const close = () => setShow(false);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>{title}</h3>
        <Button variant="dark" onClick={openNew}>
          <FaPlus /> Agregar
        </Button>
      </div>

      <Table bordered hover>
        <thead className="table-dark">
          <tr>
            {columns.map(col => (
              <th key={col.key}>{col.label}</th>
            ))}
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length + 1} className="text-center">No hay registros</td>
            </tr>
          ) : (
            data.map(item => (
              <tr key={item.id}>
                {columns.map(col => (
                  <td key={col.key}>{item[col.key]}</td>
                ))}
                <td>
                  <Button variant="danger" size="sm" onClick={() => onDelete(item.id)}>
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      <Modal show={show} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>Nueva Cita</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormComponent onClose={close} reload={reload} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ListFormItem;
