/* eslint-disable import/no-anonymous-default-export */
import api from './ApiConfig';

export default {
  signin: async (apartament,password)=>{
    let result = await api.post('/user/signin',{password,apartament})
    let json = await result.data;
    return json;
  }
}