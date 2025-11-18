import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import { loginUser } from "../../service/authService";

const LoginContainer = () => {
  const navigate = useNavigate();
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { ok, data } = await loginUser(usernameOrEmail, password);
    console.log("LoginContainer received:", data);

    if (ok && data.token) {
      localStorage.setItem("token", data.token);
      setMessage("¡Login exitoso!");
      setSuccess(true);

      setTimeout(() => navigate("/"), 1000); // redirige al home
    } else {
      setMessage(data.message || "Credenciales inválidas");
      setSuccess(false);
    }
  };

  return (
    <LoginForm
      usernameOrEmail={usernameOrEmail}
      password={password}
      setUsernameOrEmail={setUsernameOrEmail}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
      message={message}
      success={success}
    />
  );
};

export default LoginContainer;
