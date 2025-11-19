import api from "./api";

const BASE_URL = "/citas";

export const CitasService = {
  getAll: async () => {
    const res = await api.get(BASE_URL);
    return res.data;
  },

  getById: async (id) => {
    const res = await api.get(`${BASE_URL}/${id}`);
    return res.data;
  },

  create: async (data) => {
    const res = await api.post(BASE_URL, data);
    return res.data;
  },

  update: async (id, data) => {
    const res = await api.put(`${BASE_URL}/${id}`, data);
    return res.data;
  },

  remove: async (id) => {
    const res = await api.delete(`${BASE_URL}/${id}`);
    return res.data;
  },
};
