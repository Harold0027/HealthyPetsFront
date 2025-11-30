import { Card, Col, Row, Container, Button, Collapse } from "react-bootstrap";
import { useState } from "react";

const VeterinariosList = ({ veterinarios }) => {
  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center fw-bold" style={{ color: "#2e7d32" }}>
        Veterinarios Disponibles
      </h2>

      <Row xs={1} sm={2} md={3} className="g-4">
        {veterinarios.length === 0 ? (
          <p className="text-center w-100">No hay veterinarios registrados.</p>
        ) : (
          veterinarios.map((vet) => <VeterinarioCard key={vet.id} vet={vet} />)
        )}
      </Row>
    </Container>
  );
};

export default VeterinariosList;

const VeterinarioCard = ({ vet }) => {
  const [open, setOpen] = useState(false);

  return (
    <Col>
      <Card
        className="h-100 border-0 shadow"
        style={{
          borderRadius: "10px",
          backgroundColor: "#ffffff",
        }}
      >
        {/* Imagen */}
        <div className="d-flex justify-content-center mt-3">
          <Card.Img
            src={
              vet.imagenUrl
                ? vet.imagenUrl
                : `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    vet.nombre
                  )}&background=random&size=260`
            }
            alt={vet.nombre}
            style={{
              borderRadius: "10%",
              width: "250px",
              height: "300px",
              objectFit: "cover",
              padding: "4px",
            }}
          />
        </div>

        <Card.Body className="text-center">
          <Card.Title className="fw-bold fs-4" style={{ color: "#1b5e20" }}>
            {vet.nombre}
          </Card.Title>

          <Card.Text className="text-muted fs-6 mb-3">
            {vet.especialidad}
          </Card.Text>

          {/* Botón moderno */}
          <Button
            variant="success"
            size="sm"
            className="fw-bold px-3"
            style={{
              borderRadius: "12px",
              background: "#43a047",
              borderColor: "#388e3c",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#2e7d32")}
            onMouseLeave={(e) => (e.target.style.background = "#43a047")}
            onClick={() => setOpen(!open)}
            aria-controls={`info-${vet.id}`}
            aria-expanded={open}
          >
            {open ? "Ocultar" : "Ver más"}
          </Button>

          {/* Información extendida */}
          <Collapse in={open}>
            <div id={`info-${vet.id}`} className="mt-3 text-start p-2">
              <Card.Text style={{ lineHeight: "1.5" }}>
                <strong style={{ color: "#2e7d32" }}>Información:</strong>
                <br />
                {vet.informacion
                  ? vet.informacion
                  : "Sin información disponible."}
              </Card.Text>
            </div>
          </Collapse>
        </Card.Body>
      </Card>
    </Col>
  );
};
