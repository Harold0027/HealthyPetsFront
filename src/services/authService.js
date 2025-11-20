const API_URL = "http://localhost:8080/auth";

export const loginUser = async (email, password) => {
  console.log("Enviando login...");

  try {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = res.status !== 204 ? await res.json() : null;

    console.log("Respuesta del backend:", data, "status:", res.status);

    return { ok: res.ok, data };
  } catch (err) {
    console.error("Error de conexión:", err);
    return { ok: false, data: null };
  }
};
