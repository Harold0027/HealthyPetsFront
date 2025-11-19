import { Card, Table } from "react-bootstrap";

const PacientesList = ({ pacientes }) => {
  return (
    <Card className="shadow-sm">
      <Card.Header>
        <h4>Pacientes Registrados</h4>
      </Card.Header>
      <Card.Body>
        <Table striped bordered hover responsive>
          <thead className="table-dark">
            <tr>
              <th>Nombre</th>
              <th>Propietario</th>
              <th>Especie</th>
              <th>Raza</th>
              <th>Edad</th>
            </tr>
          </thead>
          <tbody>
            {pacientes.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center text-muted py-4">
                  No hay pacientes registrados
                </td>
              </tr>
            ) : (
              pacientes.map(p => (
                <tr key={p.id}>
                  <td>{p.nombre}</td>
                  <td>{p.duenoNombre}</td>
                  <td>{p.especie}</td>
                  <td>{p.raza}</td>
                  <td>{p.edad}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default PacientesList;
