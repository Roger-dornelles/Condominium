/* eslint-disable import/no-anonymous-default-export */
import  api from './ApiConfig';

export default {
  noticesAll: async()=>{
    let result = await  api.get('/notices');
    let json = await result.data;
    return json;

  }
}