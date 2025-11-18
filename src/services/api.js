const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080/api";

export const apiRequest = async (endpoint, method = "GET", body = null, headers = {}) => {
  const token = localStorage.getItem("token"); // si manejas JWT

  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, config);

    // Si el backend responde error
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Error ${response.status}: ${errorText || "Error al procesar la solicitud"}`
      );
    }

    // Si no hay contenido (204)
    if (response.status === 204) return null;

    return await response.json();

  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
};
