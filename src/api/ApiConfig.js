import axios from 'axios';

const token = localStorage.getItem('token');

const api = axios.create({
  baseURL: 'https://api-condominium.herokuapp.com',
  headers: {'Authorization': `Bearer ${token}`,
 ' Access-Control-Allow' : 'Origin, Content-Type, Accept'
}
});
export default api;