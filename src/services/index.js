import axios from 'axios';

const API_URL = "http://localhost:3000";

const createAuthor = (data) => axios.post(`${API_URL}/authors`, data);

export {
  createAuthor
}