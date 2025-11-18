import { Card, Table } from "react-bootstrap";

const VeterinariosList = ({ veterinarios }) => {
  return (
    <Card className="shadow-sm">
      <Card.Header>
        <h4>Veterinarios Disponibles</h4>
      </Card.Header>
      <Card.Body>
        <Table striped bordered hover responsive>
          <thead className="table-dark">
            <tr>
              <th>Nombre</th>
              <th>Especialidad</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th>Dirección</th>
            </tr>
          </thead>
          <tbody>
            {veterinarios.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center text-muted py-4">
                  No hay veterinarios registrados
                </td>
              </tr>
            ) : (
              veterinarios.map(vet => (
                <tr key={vet.id}>
                  <td>{vet.nombre}</td>
                  <td>{vet.especialidad}</td>
                  <td>{vet.correo}</td>
                  <td>{vet.telefono}</td>
                  <td>{vet.direccion}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default VeterinariosList;
