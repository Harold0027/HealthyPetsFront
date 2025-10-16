import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3 mt-auto">
      <Container>
        <Row>
          <Col md={6}>
            <p className="mb-0">&copy; 2025 HealthyPets. Todos los derechos reservados.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="mb-0">Contacto: info@healthypets.pe | +51 123 456 789</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
