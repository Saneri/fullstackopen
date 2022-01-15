import axios from "axios";

const URL = "http://localhost:3001";

const getAll = () => {
  const request = axios.get(`${URL}/persons`);
  return request.then((res) => res.data);
};

const addPerson = (newPerson) => {
  return axios.post(`${URL}/persons`, newPerson);
};

const deletePerson = (id) => {
  return axios.delete(`${URL}/persons/${id}`);
};

export default {
  getAll,
  addPerson,
  deletePerson,
};
