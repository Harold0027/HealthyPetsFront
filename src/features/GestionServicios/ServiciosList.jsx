import { Container, Row, Col } from "react-bootstrap";

export default function ServiciosList() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center text-success fw-bold mb-5">Nuestros Servicios</h2>

        <Row className="g-5">

          {/* Servicio 1 */}
          <Col md={6}>
            <div className="position-relative rounded-4 overflow-hidden shadow-lg">
              <img
                src="https://emvi.vet/wp-content/uploads/2025/05/Fitoterapia-veterinaria-aplicaciones.webp"
                alt="Vacunas"
                className="w-100"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center p-4"
                   style={{ background: "rgba(0,128,0,0.5)" }}>
                <h3 className="text-white fw-bold fs-3">Vacunas</h3>
                <p className="text-white fs-6 mt-2">
                  Protege a tu mascota con todas las vacunas necesarias y mantenla saludable.
                </p>
              </div>
            </div>
          </Col>

          {/* Servicio 2 */}
          <Col md={6}>
            <div className="position-relative rounded-4 overflow-hidden shadow-lg">
              <img
                src="https://imgmedia.larepublica.pe/640x342/larepublica/original/2024/09/21/66eef21db90789431400e49e.webp"
                alt="Baños y Peluquería"
                className="w-100"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center p-4"
                   style={{ background: "rgba(0,128,0,0.5)" }}>
                <h3 className="text-white fw-bold fs-3">Baños y Peluquería</h3>
                <p className="text-white fs-6 mt-2">
                  Mantén a tu mascota limpia y con un estilo único con nuestro servicio profesional.
                </p>
              </div>
            </div>
          </Col>

          {/* Servicio 3 */}
          <Col md={6}>
            <div className="position-relative rounded-4 overflow-hidden shadow-lg">
              <img
                src="https://escuelafarmacia.com/wp-content/uploads/cl%C3%ADnica-veterinaria.jpg"
                alt="Consultas Médicas"
                className="w-100"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center p-4"
                   style={{ background: "rgba(0,128,0,0.5)" }}>
                <h3 className="text-white fw-bold fs-3">Consultas Médicas</h3>
                <p className="text-white fs-6 mt-2">
                  Diagnóstico y tratamiento profesional de enfermedades comunes.
                </p>
              </div>
            </div>
          </Col>

          {/* Servicio 4 */}
          <Col md={6}>
            <div className="position-relative rounded-4 overflow-hidden shadow-lg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMOmcm6bePKodVsYvBh8uY2Eh2HNXRsLOiSg&s"
                alt="Urgencias"
                className="w-100"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center p-4"
                   style={{ background: "rgba(0,128,0,0.5)" }}>
                <h3 className="text-white fw-bold fs-3">Urgencias</h3>
                <p className="text-white fs-6 mt-2">
                  Atención inmediata para cualquier situación crítica de tu mascota.
                </p>
              </div>
            </div>
          </Col>

          {/* Servicio 5 */}
          <Col md={6}>
            <div className="position-relative rounded-4 overflow-hidden shadow-lg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMMyBapbORf0cbpmU890tJ52caxpLbjpMbjA&s"
                alt="Cirugías"
                className="w-100"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center p-4"
                   style={{ background: "rgba(0,128,0,0.5)" }}>
                <h3 className="text-white fw-bold fs-3">Cirugías</h3>
                <p className="text-white fs-6 mt-2">
                  Procedimientos quirúrgicos realizados por nuestros especialistas certificados.
                </p>
              </div>
            </div>
          </Col>

          {/* Servicio 6 */}
          <Col md={6}>
            <div className="position-relative rounded-4 overflow-hidden shadow-lg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsDeCdpgELvg6E88ifE80fEQlq-oB5QvaJGg&s"
                alt="Nutrición"
                className="w-100"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center p-4"
                   style={{ background: "rgba(0,128,0,0.5)" }}>
                <h3 className="text-white fw-bold fs-3">Nutrición</h3>
                <p className="text-white fs-6 mt-2">
                  Planes de alimentación personalizados según raza, edad y necesidades de tu mascota.
                </p>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

