import { Card, Table } from "react-bootstrap";

const HorariosUserList = ({ horarios }) => {
  return (
    <Card className="shadow-sm">
      <Card.Header>
        <h4>Horarios de Atención</h4>
      </Card.Header>
      <Card.Body>
        <Table striped bordered hover responsive>
          <thead className="table-dark">
            <tr>
              <th>Veterinario</th>
              <th>Día</th>
              <th>Hora Inicio</th>
              <th>Hora Fin</th>
            </tr>
          </thead>
          <tbody>
            {horarios.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center text-muted py-4">
                  No hay horarios registrados
                </td>
              </tr>
            ) : (
              horarios.map(h => (
                <tr key={h.id}>
                  <td>{h.veterinario}</td>
                  <td>{h.dia}</td>
                  <td>{h.horaInicio}</td>
                  <td>{h.horaFin}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default HorariosUserList;
