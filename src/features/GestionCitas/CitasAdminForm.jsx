import { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { CitasService } from "../../services/CitasService";
import { PacientesService } from "../../services/PacientesService";
import { VeterinariosService } from "../../services/VeterinariosService";

const CitasAdminForm = ({ onClose, reload }) => {
  const [form, setForm] = useState({
    pacienteId: "",
    veterinarioId: "",
    fecha: "",
    hora: "",
    motivo: "",
  });

  const [pacientes, setPacientes] = useState([]);
  const [veterinarios, setVeterinarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const pacs = await PacientesService.getAll();
      const vets = await VeterinariosService.getAll();
      setPacientes(pacs);
      setVeterinarios(vets);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await CitasService.create(form);
      reload();
      onClose();
    } catch (err) {
      console.error("Error guardando cita", err);
    }
  };

  return (
    <Card className="p-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Paciente</Form.Label>
          <Form.Select
            name="pacienteId"
            value={form.pacienteId}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione un paciente</option>
            {pacientes.map((p) => (
              <option key={p.id} value={p.id}>{p.nombre}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Veterinario</Form.Label>
          <Form.Select
            name="veterinarioId"
            value={form.veterinarioId}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione un veterinario</option>
            {veterinarios.map((v) => (
              <option key={v.id} value={v.id}>{v.nombre}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Fecha</Form.Label>
          <Form.Control
            type="date"
            name="fecha"
            value={form.fecha}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Hora</Form.Label>
          <Form.Control
            type="time"
            name="hora"
            value={form.hora}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Motivo</Form.Label>
          <Form.Control
            type="text"
            name="motivo"
            value={form.motivo}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="dark" type="submit" className="w-100">
          Crear Cita
        </Button>
      </Form>
    </Card>
  );
};

export default CitasAdminForm;
