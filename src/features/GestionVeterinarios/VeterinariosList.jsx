import { Card, Col, Row, Container } from "react-bootstrap";

const VeterinariosList = ({ veterinarios }) => {
  return (
    <Container className="my-4">
      <h3 className="mb-4 text-center">Veterinarios Disponibles</h3>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {veterinarios.length === 0 ? (
          <p className="text-center w-100">No hay veterinarios registrados.</p>
        ) : (
          veterinarios.map((vet) => (
            <Col key={vet.id}>
              <Card className="h-100 shadow-sm text-center border-0">
                <Card.Img
                  variant="top"
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                    vet.nombre
                  )}&background=random&size=200`}
                  alt={vet.nombre}
                  style={{ borderRadius: "50%", width: "120px", height: "120px", objectFit: "cover", margin: "15px auto 0" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">{vet.nombre}</Card.Title>
                  <Card.Text className="text-muted">{vet.especialidad}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default VeterinariosList;
