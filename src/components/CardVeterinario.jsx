import { Card, Button } from "react-bootstrap";

export default function CardVeterinario({ nombre, especialidad, horario, foto }) {
  return (
    <Card
      className="border-0 rounded-4 shadow-sm mx-auto my-3"
      style={{
        width: "20rem",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.03)";
        e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
      }}
    >
      <Card.Img
        variant="top"
        src={foto}
        alt={nombre}
        style={{
          height: "300px",
          objectFit: "cover",
          borderTopLeftRadius: "1rem",
          borderTopRightRadius: "1rem",
        }}
      />
      <Card.Body className="text-center">
        <Card.Title className="text-success fw-bold">{nombre}</Card.Title>
        <Card.Text className="text-muted mb-2">{especialidad}</Card.Text>
        <div className="bg-success bg-opacity-10 text-success rounded-pill py-1 px-3 d-inline-block mb-3">
          {horario}
        </div>
        <Button variant="success" size="sm">
          Ver Perfil
        </Button>
      </Card.Body>
    </Card>
  );
}
