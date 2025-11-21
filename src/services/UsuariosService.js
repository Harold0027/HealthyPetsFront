import api from "./api";

const BASE_URL = "/users";

export const UsuariosService = {
  getAll: async () => {
    const res = await api.get(BASE_URL);
    return res.data;
  },

  getById: async (id) => {
    const res = await api.get(`${BASE_URL}/${id}`);
    return res.data;
  },

  create: async (user) => {
    const res = await api.post(BASE_URL, user);
    return res.data;
  },

  update: async (id, user) => {
    const res = await api.put(`${BASE_URL}/${id}`, user);
    return res.data;
  },

  remove: async (id) => {
    const res = await api.delete(`${BASE_URL}/${id}`);
    return res.data;
  },
};
