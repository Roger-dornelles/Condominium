/* eslint-disable import/no-anonymous-default-export */
import api from './ApiConfig';

export default {
  apartamentsAll: async()=>{
    let id = localStorage.getItem('id')
    let result = await api.get('/apartaments',{id});
    let json = await result.data;
    return json;
  },
  //exibir apartamento especifico do id
  userApartament: async()=>{
    let id = localStorage.getItem('id');
    let result = await api.get(`/apartament/user/${id}`);
    let json = result.data;
    return json;
  },
  //atualizar dados do apartamento
  updateApartament: async(proprietary, contact)=>{
    let id = localStorage.getItem('id');
    let result = await api.put(`/apartaments/${id}`,{proprietary,contact});
    let json = await result.data;
    return json;
  }
}