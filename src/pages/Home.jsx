import Navbar from "../layouts/NavbarUser";
import Footer from "../layouts/Footer";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-success text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
              <h1 className="display-4 fw-bold mb-3">
                Bienvenido a <span className="text-warning">HealthyPets</span>
              </h1>
              <p className="lead mb-4">
                Cuidamos de tus mascotas con amor y profesionalismo
              </p>
              <Link to="/servicios">
                <Button variant="light" className="fw-bold px-4 py-2">
                  Conoce nuestros servicios
                </Button>
              </Link>
            </Col>
            <Col md={6}>
              <Card.Img
                src="https://images.ctfassets.net/rt5zmd3ipxai/1H91mBOZVoMd8cFLXDfMrz/81edd33b0f5c80bd1c777a3eefca9a1c/HHP-Logo-Color.png"
                alt="Hero HealthyPets"
                className="rounded-4"
                style={{ height: "300px", objectFit: "contain" }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features / Beneficios */}
      <section className="py-5">
        <Container>
          <h2 className="text-center text-success fw-bold mb-5">Por qué elegirnos</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="text-center shadow-sm h-100 border-0 rounded-4">
                <Card.Body>
                  <div className="mb-3">
                    <Card.Img
                      src="https://healthypetshq.com/cdn/shop/files/1600x1000_banner_new.jpg?v=1720305351&width=1600"
                      alt="Atención profesional"
                      className="rounded-circle"
                      style={{ width: "60px", height: "60px", objectFit: "cover" }}
                    />
                  </div>
                  <Card.Title className="fw-bold">Atención profesional</Card.Title>
                  <Card.Text className="text-muted">
                    Veterinarios certificados y con experiencia en todo tipo de mascotas.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="text-center shadow-sm h-100 border-0 rounded-4">
                <Card.Body>
                  <div className="mb-3">
                    <Card.Img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbVn1vS777v8WlMUoQbROzYgchds6VfzNOKg&s"
                      alt="Cuidado integral"
                      className="rounded-circle"
                      style={{ width: "60px", height: "60px", objectFit: "cover" }}
                    />
                  </div>
                  <Card.Title className="fw-bold">Cuidado integral</Card.Title>
                  <Card.Text className="text-muted">
                    Desde vacunas hasta consultas especializadas y emergencias.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="text-center shadow-sm h-100 border-0 rounded-4">
                <Card.Body>
                  <div className="mb-3">
                    <Card.Img
                      src="https://cdn.nubika.es/wp-content/uploads/2022/07/funciones-veterinarios.jpg"
                      alt="Ambiente seguro"
                      className="rounded-circle"
                      style={{ width: "60px", height: "60px", objectFit: "cover" }}
                    />
                  </div>
                  <Card.Title className="fw-bold">Ambiente seguro</Card.Title>
                  <Card.Text className="text-muted">
                    Instalaciones limpias y adaptadas para la comodidad de tus mascotas.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sección Servicios / Imágenes */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center text-success fw-bold mb-5">Nuestros Servicios</h2>
          <Row className="g-4 justify-content-center">
            <Col md={4}>
              <Card className="shadow-sm rounded-4 text-center h-100">
                <Card.Img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE2qETyg9cDZBb4J1e5x5qGrI2JOsqHMEORA&s"
                  alt="Servicio 1"
                  className="rounded-4"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              </Card>
            </Col>

            <Col md={4}>
              <Card className="shadow-sm rounded-4 text-center h-100">
                <Card.Img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuXPrIoMhNh8yEaptrjy2PCOcJv8AGHyWJzw&s"
                  alt="Servicio 2"
                  className="rounded-4"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              </Card>
            </Col>

            <Col md={4}>
              <Card className="shadow-sm rounded-4 text-center h-100">
                <Card.Img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYLX2iUoE18SJMaDOrQgNLrkkm9f7czVIjKg&s"
                  alt="Servicio 3"
                  className="rounded-4"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA / Agenda tu cita */}
      <section className="py-5 bg-success text-center text-white">
        <Container>
          <h2 className="fw-bold mb-3">Agenda tu cita hoy</h2>
          <p className="mb-4">¡No esperes más para cuidar a tu mascota!</p>
          <Link to="/citas">
            <Button variant="warning" className="fw-bold px-4 py-2">
              Ver citas
            </Button>
          </Link>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
