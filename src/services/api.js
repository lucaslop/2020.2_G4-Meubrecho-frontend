import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backarq.herokuapp.com'
});

export default api;
