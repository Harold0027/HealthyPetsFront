import { ListGroup, Badge } from "react-bootstrap";

const HorariosDisponibles = ({ horarios }) => {
  if (!horarios.length) return <p>No hay horarios disponibles.</p>;

  return (
    <ListGroup>
      {horarios.map((h) => (
        <ListGroup.Item
          key={h.id}
          className="d-flex justify-content-between align-items-center pe-4" // ↑ padding derecho extra
        >
          <div>
            <strong>{h.veterinarioNombre}</strong>
            <div>Día: {h.dia}</div>
            <div>
              {h.horaInicio} - {h.horaFin}
            </div>
          </div>

          <Badge bg="success">Disponible</Badge>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default HorariosDisponibles;
