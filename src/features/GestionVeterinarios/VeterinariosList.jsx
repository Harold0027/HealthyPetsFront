import { Container, Row, Col } from "react-bootstrap";
import CardVeterinario from "../../components/CardVeterinario";

const veterinarios = [
  {
    nombre: "Dr. Juan Pérez",
    especialidad: "Cardiología",
    horario: "Lun-Vie 9am-5pm",
    foto: "https://file.urp.edu.pe/thumb-urp-wm-868-hm-1000-we-868-he-1000-x-0-y-0-s-0-q-60-zc-3-f-0-rgb-000000-src-53088-n-img-3400.jpg",
  },
  {
    nombre: "Dra. María López",
    especialidad: "Dermatología",
    horario: "Lun-Sab 10am-6pm",
    foto: "https://img.freepik.com/psd-premium/joven-veterinario-sostiene-amor-perro-feliz-entorno-limpio-brillante_585735-49669.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    nombre: "Dra. Jessica Olortegui",
    especialidad: "Dermatología",
    horario: "Lun-Sab 10am-6pm",
    foto: "https://www.shutterstock.com/image-photo/cat-portrait-veterinarian-animal-clinic-600nw-2489920421.jpg",
  },
];

export default function VeterinariosList() {
  return (
    <Container className="py-4">
      <Row className="g-4 justify-content-center">
        {veterinarios.map((v, i) => (
          <Col key={i} xs={12} md={6} lg={4} className="d-flex justify-content-center">
            <CardVeterinario
              nombre={v.nombre}
              especialidad={v.especialidad}
              horario={v.horario}
              foto={v.foto}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
