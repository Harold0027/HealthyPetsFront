import api from "./api";

const BASE_URL = "/citas";

export const CitasService = {
  getAll: async () => {
    const res = await api.get(BASE_URL);
    return res.data;
  },

  create: async (data) => {
    const payload = {
      pacienteId: data.pacienteId,
      fecha: data.fecha,
      hora: data.hora,
      motivo: data.motivo,
    };
    const res = await api.post(BASE_URL, payload);
    return res.data;
  },

  remove: async (id) => {
    const res = await api.delete(`${BASE_URL}/${id}`);
    return res.data;
  },
};
