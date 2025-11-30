import api from "./api";

const BASE_URL = "/pacientes";

export const PacientesService = {
  getAll: async () => {
    const res = await api.get(BASE_URL);
    return res.data;
  },

  getById: async (id) => {
    const res = await api.get(`${BASE_URL}/${id}`);
    return res.data;
  },

  createPaciente: async (paciente) => {
    const res = await api.post(BASE_URL, paciente);
    return res.data;
  },

  updatePaciente: async (id, paciente) => {
    const res = await api.put(`${BASE_URL}/${id}`, paciente);
    return res.data;
  },

  deletePaciente: async (id) => {
    const res = await api.delete(`${BASE_URL}/${id}`);
    return res.data;
  },
};
