import api from "./api";

export const getHorarios = () =>
  api.get("/horarios").then(res => res.data);

export const getHorarioById = (id) =>
  api.get(`/horarios/${id}`).then(res => res.data);

export const createHorario = (data) =>
  api.post("/horarios", data);

export const updateHorario = (id, data) =>
  api.put(`/horarios/${id}`, data);

export const deleteHorario = (id) =>
  api.delete(`/horarios/${id}`);
