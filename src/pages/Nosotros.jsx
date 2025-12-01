import UserLayout from "../layouts/UserLayout";
import { Container, Row, Col, Card } from "react-bootstrap";

const Nosotros = () => {
  return (
    <UserLayout>
      <div className="bg-light text-dark">

        {/* HERO */}
        <section className="bg-success text-white py-5 text-center">
          <Container>
            <h1 className="display-5 fw-bold mb-3">Somos Healthy Pets</h1>
            <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
              Una clínica veterinaria comprometida con el bienestar, la tecnología avanzada
              y una atención ética y profesional para tu mascota.
            </p>
          </Container>
        </section>

        {/* INTRO */}
        <section className="py-5">
          <Container>
            <h2 className="text-center text-success fw-bold mb-4">
              Queremos mejorar la calidad de vida de cada mascota
            </h2>
            <p className="text-center mx-auto fs-5 text-muted" style={{ maxWidth: "850px" }}>
              Promovemos excelencia veterinaria con prácticas modernas, tecnología de punta e innovación.
              Priorizamos la prevención para garantizar una vida sana y tratamos cada caso con un enfoque
              personalizado, cálido y eficiente.
            </p>
          </Container>
        </section>

        {/* PILARES */}
        <section className="py-5 bg-white">
          <Container>
            <h2 className="text-center text-success fw-bold mb-5">
              Nuestros 5 Pilares Fundamentales
            </h2>

            <Row className="g-5">
              {/* P1 */}
              <Col md={6}>
                <Card className="shadow rounded-4 border-0 h-100 p-3">
                  <Card.Img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC3jdAVsEb1xujxetPdCiwj5cHIqi-cdkHMw&s"
                    className="rounded-4 mb-3"
                    style={{ height: "230px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <h3 className="text-success fw-bold">Ética profesional</h3>
                    <p className="text-muted mt-2 fs-5">
                      Tomamos decisiones con transparencia y responsabilidad, priorizando siempre el
                      bienestar y la dignidad de cada mascota.
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              {/* P2 */}
              <Col md={6}>
                <Card className="shadow rounded-4 border-0 h-100 p-3">
                  <Card.Img
                    src="https://pregrado.upc.edu.pe/facultad-de-ciencias-de-la-salud/medicina-veterinaria/img/6_programas.jpg"
                    className="rounded-4 mb-3"
                    style={{ height: "230px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <h3 className="text-success fw-bold">Excelentes profesionales</h3>
                    <p className="text-muted mt-2 fs-5">
                      Nuestro equipo veterinario combina experiencia, actualización constante y vocación
                      para brindar un servicio de primer nivel.
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              {/* P3 */}
              <Col md={6}>
                <Card className="shadow rounded-4 border-0 h-100 p-3">
                  <Card.Img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1n3bVR7go_ZgBT4NpYTbgSQwwh6rSCKyMRQ&s"
                    className="rounded-4 mb-3"
                    style={{ height: "230px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <h3 className="text-success fw-bold">Tecnología avanzada</h3>
                    <p className="text-muted mt-2 fs-5">
                      Equipos modernos que permiten diagnósticos más rápidos y precisos, aumentando la
                      efectividad de los tratamientos.
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              {/* P4 */}
              <Col md={6}>
                <Card className="shadow rounded-4 border-0 h-100 p-3">
                  <Card.Img
                    src="https://www.purina.com.ar/sites/default/files/2022-10/purina-consulta-veterinaria-para-mascotas-lo-que-debes-saber.jpg"
                    className="rounded-4 mb-3"
                    style={{ height: "230px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <h3 className="text-success fw-bold">Atención basada en evidencia</h3>
                    <p className="text-muted mt-2 fs-5">
                      Tratamientos respaldados por ciencia y evaluación clínica constante para asegurar lo
                      que realmente funciona.
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              {/* P5 */}
              <Col md={12}>
                <Card className="shadow rounded-4 border-0 h-100 p-3">
                  <Card.Img
                    src="https://universidadeuropea.com/resources/media/images/medicina-veterinaria-1200x630.original.jpg"
                    className="rounded-4 mb-3"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <h3 className="text-success fw-bold">Trato amable y respetuoso</h3>
                    <p className="text-muted mt-2 fs-5">
                      Atención cálida, empática y segura para ti y tu mascota, creando un entorno donde
                      ambas partes se sientan cómodas y bien atendidas.
                    </p>
                  </Card.Body>
                </Card>
              </Col>

            </Row>
          </Container>
        </section>

      </div>
    </UserLayout>
  );
};

export default Nosotros;
