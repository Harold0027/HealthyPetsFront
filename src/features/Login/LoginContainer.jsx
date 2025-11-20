import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import { loginUser } from "../../services/authService";

const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await loginUser(email, password);

    if (response.ok) {
      setSuccess(true);
      setMessage("Inicio de sesión exitoso");

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);

      navigate("/");
    } else {
      setSuccess(false);
      setMessage("Credenciales incorrectas");
    }
  };

  return (
    <LoginForm
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
      message={message}
      success={success}
    />
  );
};

export default LoginContainer;
