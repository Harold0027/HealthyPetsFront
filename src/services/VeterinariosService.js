import api from "./api";

const BASE_URL = "/veterinarios";

export const VeterinariosService = {
  getAll: async () => {
    const response = await api.get(BASE_URL);
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`${BASE_URL}/${id}`);
    return response.data;
  },

  create: async (vetData) => {
    const response = await api.post(BASE_URL, vetData);
    return response.data;
  },

  update: async (id, vetData) => {
    const response = await api.put(`${BASE_URL}/${id}`, vetData);
    return response.data;
  },

  remove: async (id) => {
    const response = await api.delete(`${BASE_URL}/${id}`);
    return response.data;
  },
};
