import Navbar from "../layouts/NavbarUser";
import Footer from "../layouts/Footer";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-success text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
              <h1 className="display-3 fw-bold mb-3">
                Bienvenido a <span className="text-warning">HealthyPets</span>
              </h1>
              <p className="lead fs-4 mb-4">
                Cuidamos de tus mascotas con amor, profesionalismo y tecnología de vanguardia.
              </p>
              <Link to="/servicios">
                <Button variant="light" size="lg" className="fw-bold px-4 py-3 shadow">
                  Conoce nuestros servicios
                </Button>
              </Link>
            </Col>
            <Col md={6}>
              <img
                src="https://images.ctfassets.net/rt5zmd3ipxai/1H91mBOZVoMd8cFLXDfMrz/81edd33b0f5c80bd1c777a3eefca9a1c/HHP-Logo-Color.png"
                alt="Hero HealthyPets"
                className="rounded-4 shadow"
                style={{ width: "100%", height: "350px", objectFit: "contain" }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* BENEFICIOS / FEATURES */}
      <section className="py-5">
        <Container>
          <h2 className="text-center text-success fw-bold mb-5 display-6">Por qué elegirnos</h2>
          <Row className="g-5">
            <Col md={4}>
              <div className="p-4 shadow-lg rounded-4 bg-white h-100 text-center transition-hover">
                <img
                  src="https://healthypetshq.com/cdn/shop/files/1600x1000_banner_new.jpg?v=1720305351&width=1600"
                  alt="Atención profesional"
                  className="rounded-circle mb-3"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <h4 className="fw-bold text-success">Atención profesional</h4>
                <p className="text-muted fs-5 mt-2">
                  Veterinarios certificados y con amplia experiencia cuidando todo tipo de mascotas.
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div className="p-4 shadow-lg rounded-4 bg-white h-100 text-center transition-hover">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbVn1vS777v8WlMUoQbROzYgchds6VfzNOKg&s"
                  alt="Cuidado integral"
                  className="rounded-circle mb-3"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <h4 className="fw-bold text-success">Cuidado integral</h4>
                <p className="text-muted fs-5 mt-2">
                  Desde vacunas hasta emergencias, garantizamos la salud completa de tu mascota.
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div className="p-4 shadow-lg rounded-4 bg-white h-100 text-center transition-hover">
                <img
                  src="https://cdn.nubika.es/wp-content/uploads/2022/07/funciones-veterinarios.jpg"
                  alt="Ambiente seguro"
                  className="rounded-circle mb-3"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <h4 className="fw-bold text-success">Ambiente seguro</h4>
                <p className="text-muted fs-5 mt-2">
                  Instalaciones limpias y adaptadas para la comodidad y seguridad de tus mascotas.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SERVICIOS DESTACADOS */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center text-success fw-bold mb-5 display-6">Nuestros Servicios</h2>

          <Row className="g-4">
            <Col md={6}>
              <div className="position-relative overflow-hidden rounded-4 shadow-lg h-100">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE2qETyg9cDZBb4J1e5x5qGrI2JOsqHMEORA&s"
                  alt="Vacunas"
                  className="w-100"
                  style={{ height: "350px", objectFit: "cover", transition: "transform 0.5s" }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center p-4"
                     style={{ background: "rgba(0,128,0,0.5)", transition: "background 0.5s" }}>
                  <h3 className="text-white fw-bold fs-2">Vacunas</h3>
                  <p className="text-white fs-5 mt-2">
                    Protege a tu mascota con todas las vacunas necesarias y mantén su salud al máximo.
                  </p>
                </div>
              </div>
            </Col>

            <Col md={6}>
              <div className="position-relative overflow-hidden rounded-4 shadow-lg h-100">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuXPrIoMhNh8yEaptrjy2PCOcJv8AGHyWJzw&s"
                  alt="Consultas Médicas"
                  className="w-100"
                  style={{ height: "350px", objectFit: "cover", transition: "transform 0.5s" }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center p-4"
                     style={{ background: "rgba(0,128,0,0.5)", transition: "background 0.5s" }}>
                  <h3 className="text-white fw-bold fs-2">Consultas Médicas</h3>
                  <p className="text-white fs-5 mt-2">
                    Diagnóstico y tratamiento profesional de enfermedades comunes.
                  </p>
                </div>
              </div>
            </Col>

            <Col md={6}>
              <div className="position-relative overflow-hidden rounded-4 shadow-lg h-100">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYLX2iUoE18SJMaDOrQgNLrkkm9f7czVIjKg&s"
                  alt="Urgencias"
                  className="w-100"
                  style={{ height: "350px", objectFit: "cover", transition: "transform 0.5s" }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center p-4"
                     style={{ background: "rgba(0,128,0,0.5)", transition: "background 0.5s" }}>
                  <h3 className="text-white fw-bold fs-2">Urgencias</h3>
                  <p className="text-white fs-5 mt-2">
                    Atención inmediata para cualquier emergencia de tu mascota.
                  </p>
                </div>
              </div>
            </Col>

            <Col md={6}>
              <div className="position-relative overflow-hidden rounded-4 shadow-lg h-100">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMOmcm6bePKodVsYvBh8uY2Eh2HNXRsLOiSg&s"
                  alt="Cirugías"
                  className="w-100"
                  style={{ height: "350px", objectFit: "cover", transition: "transform 0.5s" }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center p-4"
                     style={{ background: "rgba(0,128,0,0.5)", transition: "background 0.5s" }}>
                  <h3 className="text-white fw-bold fs-2">Cirugías</h3>
                  <p className="text-white fs-5 mt-2">
                    Procedimientos quirúrgicos realizados por especialistas certificados.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA / Agenda tu cita */}
      <section className="py-5 bg-success text-center text-white">
        <Container>
          <h2 className="fw-bold mb-3 display-6">Agenda tu cita hoy</h2>
          <p className="mb-4 fs-5">¡No esperes más para cuidar a tu mascota con nuestro equipo profesional!</p>
          <Link to="/citas">
            <Button variant="warning" size="lg" className="fw-bold px-5 py-3 shadow">
              Ver citas
            </Button>
          </Link>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
