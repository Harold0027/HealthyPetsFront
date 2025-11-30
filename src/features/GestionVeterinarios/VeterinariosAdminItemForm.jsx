import { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { VeterinariosService } from "../../services/VeterinariosService";

const VeterinariosForm = ({ show, onClose, initialData, reload }) => {
  const [vet, setVet] = useState({
    nombre: "",
    especialidad: "",
    correo: "",
    telefono: "",
    direccion: "",
    informacion: "",
    imagenUrl: "",
  });

  useEffect(() => {
    if (initialData) setVet(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setVet({ ...vet, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (initialData) {
        await VeterinariosService.update(initialData.id, vet);
      } else {
        await VeterinariosService.create(vet);
      }
      reload();
      onClose();
    } catch (error) {
      console.error("Error guardando veterinario:", error);
    }
  };

  return (
    <Modal show={show} onHide={onClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{initialData ? "Editar Veterinario" : "Nuevo Veterinario"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              name="nombre"
              value={vet.nombre}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Especialidad</Form.Label>
            <Form.Control
              name="especialidad"
              value={vet.especialidad}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              name="correo"
              type="email"
              value={vet.correo}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              name="telefono"
              value={vet.telefono}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              name="direccion"
              value={vet.direccion}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Información</Form.Label>
            <Form.Control
              name="informacion"
              value={vet.informacion}
              onChange={handleChange}
              as="textarea"
              rows={3}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Imagen URL</Form.Label>
            <Form.Control
              name="imagenUrl"
              value={vet.imagenUrl}
              onChange={handleChange}
              placeholder="https://ui-avatars.com/api/?name=Nombre+Apellido"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Cerrar</Button>
        <Button variant="primary" onClick={handleSubmit}>
          {initialData ? "Actualizar" : "Crear"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default VeterinariosForm;
