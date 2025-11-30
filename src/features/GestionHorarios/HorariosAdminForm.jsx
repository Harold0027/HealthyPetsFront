import { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { createHorario, updateHorario } from "../../services/HorarioService";
import { VeterinariosService } from "../../services/VeterinariosService";

const HorariosAdminForm = ({ initialData, onClose, reload }) => {

  const [form, setForm] = useState({
    id: initialData?.id || null,
    veterinarioId: initialData?.veterinarioId || "",
    dia: initialData?.dia || "",
    horaInicio: initialData?.horaInicio || "",
    horaFin: initialData?.horaFin || "",
  });

  const [veterinarios, setVeterinarios] = useState([]);

  const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

  useEffect(() => {
    cargarVeterinarios();
  }, []);

  const cargarVeterinarios = async () => {
    try {
      const vets = await VeterinariosService.getAll();
      setVeterinarios(vets);
    } catch (err) {
      console.error("Error cargando veterinarios", err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (form.id) {
        await updateHorario(form.id, form);
      } else {
        await createHorario(form);
      }

      reload();  // refresca la tabla
      onClose(); // cierra el modal

    } catch (err) {
      console.error("Error guardando horario", err);
    }
  };

  return (
    <Card className="p-3">
      <Form onSubmit={handleSubmit}>

        {/* Veterinario */}
        <Form.Group className="mb-3">
          <Form.Label>Veterinario</Form.Label>
          <Form.Select
            name="veterinarioId"
            value={form.veterinarioId}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione un veterinario</option>
            {veterinarios.map(v => (
              <option key={v.id} value={v.id}>{v.nombre}</option>
            ))}
          </Form.Select>
        </Form.Group>

        {/* Día */}
        <Form.Group className="mb-3">
          <Form.Label>Día</Form.Label>
          <Form.Select
            name="dia"
            value={form.dia}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione un día</option>
            {dias.map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </Form.Select>
        </Form.Group>

        {/* Hora Inicio */}
        <Form.Group className="mb-3">
          <Form.Label>Hora Inicio</Form.Label>
          <Form.Control
            type="time"
            name="horaInicio"
            value={form.horaInicio}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Hora Fin */}
        <Form.Group className="mb-3">
          <Form.Label>Hora Fin</Form.Label>
          <Form.Control
            type="time"
            name="horaFin"
            value={form.horaFin}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="dark" type="submit" className="w-100">
          {form.id ? "Guardar Cambios" : "Crear Horario"}
        </Button>

      </Form>
    </Card>
  );
};

export default HorariosAdminForm;
