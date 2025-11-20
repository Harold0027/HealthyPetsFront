import api from "./api";

export const getHorarios = () =>
  api.get("/horarios").then(r => r.data);

export const getHorarioById = (id) =>
  api.get(`/horarios/${id}`).then(r => r.data);

export const createHorario = (data) =>
  api.post("/horarios", data).then(r => r.data);

export const updateHorario = (id, data) =>
  api.put(`/horarios/${id}`, data).then(r => r.data);

export const deleteHorario = (id) =>
  api.delete(`/horarios/${id}`).then(r => r.data);
