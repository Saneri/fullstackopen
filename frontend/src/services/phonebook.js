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

const updateNumber = (id, number) => {
  return axios.patch(`${URL}/persons/${id}`, { number });
};

const phonebook = {
  getAll,
  addPerson,
  deletePerson,
  updateNumber,
};

export default phonebook;
