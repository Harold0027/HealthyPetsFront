import { Form, Button, Card, Alert } from "react-bootstrap";

const LoginForm = ({
  usernameOrEmail,
  password,
  setUsernameOrEmail,
  setPassword,
  handleSubmit,
  message,
  success,
}) => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", background: "#e6f4ea" }}>
      <Card style={{ width: "380px", padding: "1.5rem", borderRadius: "15px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>
        <h3 className="text-center mb-3" style={{ color: "#2f855a" }}>
          Iniciar Sesión
        </h3>

        {/* Mensaje */}
        {message && (
          <Alert variant={success ? "success" : "danger"} className="text-center">
            {message}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          {/* Usuario o Email */}
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "#22543d" }}>Usuario</Form.Label>
            <Form.Control
              type="text"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
              required
              style={{
                borderRadius: "10px",
                borderColor: "#9ae6b4",
              }}
            />
          </Form.Group>

          {/* Contraseña */}
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "#22543d" }}>Contraseña</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                borderRadius: "10px",
                borderColor: "#9ae6b4",
              }}
            />
          </Form.Group>

          {/* Botón */}
          <Button
            type="submit"
            className="w-100 mt-2"
            style={{
              background: "linear-gradient(135deg, #48bb78, #38a169)",
              border: "none",
              padding: "0.7rem",
              borderRadius: "10px",
              fontWeight: "600",
            }}
          >
            Entrar
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default LoginForm;
