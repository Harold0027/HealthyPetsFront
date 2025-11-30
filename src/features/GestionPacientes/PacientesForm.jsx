import { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { PacientesService } from "../../services/PacientesService";

const PacientesForm = ({ show, onClose, initialData, reload }) => {
  const [paciente, setPaciente] = useState({
    duenoId: "",
    nombre: "",
    especie: "",
    raza: "",
    edad: "",
  });

  // Cuando se recibe initialData (editar), se actualiza el estado
  useEffect(() => {
    if (initialData) {
      setPaciente({
        duenoId: initialData.duenoId || "",
        nombre: initialData.nombre || "",
        especie: initialData.especie || "",
        raza: initialData.raza || "",
        edad: initialData.edad || "",
      });
    }
  }, [initialData]);

  // Cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaciente({ ...paciente, [name]: value });
  };

  // Guardar o actualizar paciente
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        duenoId: Number(paciente.duenoId),
        nombre: paciente.nombre,
        especie: paciente.especie,
        raza: paciente.raza,
        edad: paciente.edad ? Number(paciente.edad) : null,
      };

      if (initialData) {
        await PacientesService.updatePaciente(initialData.id, payload);
      } else {
        await PacientesService.createPaciente(payload);
      }

      reload(); // Recarga la lista en el contenedor
      onClose(); // Cierra el modal
    } catch (error) {
      console.error("Error guardando paciente:", error);
    }
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{initialData ? "Editar Paciente" : "Nuevo Paciente"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>ID del Propietario</Form.Label>
            <Form.Control
              name="duenoId"
              type="number"
              value={paciente.duenoId}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              name="nombre"
              value={paciente.nombre}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Especie</Form.Label>
            <Form.Control
              name="especie"
              value={paciente.especie}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Raza</Form.Label>
            <Form.Control
              name="raza"
              value={paciente.raza}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Edad</Form.Label>
            <Form.Control
              name="edad"
              type="number"
              value={paciente.edad}
              onChange={handleChange}
            />
          </Form.Group>

          <Button type="submit" variant="primary">
            {initialData ? "Actualizar" : "Crear"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default PacientesForm;
