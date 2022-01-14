import axios from "axios";

const URL = "http://localhost:3001";

const getAll = () => {
  const request = axios.get(`${URL}/persons`);
  return request.then((res) => res.data);
};

export default {
  getAll,
};
