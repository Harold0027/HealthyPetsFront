import { Form, Button, Card, Alert } from "react-bootstrap";

const LoginForm = ({
  email,
  password,
  setEmail,
  setPassword,
  handleSubmit,
  message,
  success,
}) => {
  
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e); // 🔥 ESTE ES EL QUE SÍ EXISTE
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", background: "#e6f4ea" }}
    >
      <Card
        style={{
          width: "380px",
          padding: "1.5rem",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        <h3 className="text-center mb-3" style={{ color: "#2f855a" }}>
          Iniciar Sesión
        </h3>

        {message && (
          <Alert
            variant={success ? "success" : "danger"}
            className="text-center"
          >
            {message}
          </Alert>
        )}

        <Form onSubmit={handleLocalSubmit}>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "#22543d" }}>Correo</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ color: "#22543d" }}>Contraseña</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button
            type="submit"
            className="w-100 mt-2"
          >
            Entrar
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default LoginForm;
