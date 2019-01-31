import axios from 'axios';

const API_URL = "";

const createUser = (data) => axios.post(`${API_URL}/users/signup`, data);

export {
  createUser
}