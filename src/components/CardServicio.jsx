import { Card } from "react-bootstrap";

export default function CardServicio({ nombre, descripcion, icono }) {
  return (
    <Card
      className="shadow-sm rounded-4 mx-auto my-3 text-center"
      style={{
        maxWidth: "800px",
        width: "100%",
        padding: "2rem",
        transition: "transform 0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <Card.Img
        variant="top"
        src={icono}
        alt={nombre}
        style={{ height: "300px", width: "800px", objectFit: "contain", margin: "0 auto 1rem" }}
      />
      <Card.Body>
        <Card.Title className="text-success fw-bold mb-2">{nombre}</Card.Title>
        <Card.Text className="text-muted">{descripcion}</Card.Text>
      </Card.Body>
    </Card>
  );
}
