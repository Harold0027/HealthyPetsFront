import { Card, Table } from "react-bootstrap";

const CitasList = ({ citas }) => {
  return (
    <Card className="shadow-sm">
      <Card.Header>
        <h4>Mis Citas</h4>
      </Card.Header>
      <Card.Body>
        <Table striped bordered hover responsive>
          <thead className="table-dark">
            <tr>
              <th>Paciente</th>
              <th>Propietario</th>
              <th>Veterinario</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Motivo</th>
            </tr>
          </thead>
          <tbody>
            {citas.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center text-muted py-4">
                  No hay citas registradas
                </td>
              </tr>
            ) : (
              citas.map(c => (
                <tr key={c.id}>
                  <td>{c.paciente}</td>
                  <td>{c.propietario}</td>
                  <td>{c.veterinario_id}</td>
                  <td>{c.fecha}</td>
                  <td>{c.hora}</td>
                  <td>{c.motivo}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default CitasList;
