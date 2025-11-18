const API_URL = "http://localhost:8080/api/auth";

export const loginUser = async (usernameOrEmail, password) => {
  try {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usernameOrEmail, password }),
    });

    const data = await res.json();
    console.log("Respuesta login:", data, "Status:", res.status);

    return { ok: res.ok, data };
  } catch (err) {
    console.error("Error de conexión:", err);
    return { ok: false, data: { message: "Error de conexión con el servidor" } };
  }
};
