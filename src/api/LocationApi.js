/* eslint-disable import/no-anonymous-default-export */
import api from './ApiConfig';

export default {
  //exibir reservas
reserves: async()=>{
    let result = await api.get('/location');
    let json = await result.data;
    return json;
  },
  // fazer reserva
  reserv: async(area,apartament,date,proprietary)=>{
    let id = localStorage.getItem('id');
    let result = await api.post(`/location/${id}`,{area,apartament,date,proprietary})
    let json = await result.data;
    return json;
  },
  //exibir reservas do usuario especifico
  getReservUser: async()=>{
    let id = localStorage.getItem('id');
    let result = await api.get(`/location/user/${id}`);
    let json = await result.data;
    return json;
  },
  //atualizar reservas do usuario especifico
  confirmReserv: async(area,date,id)=>{
    let result = await api.put(`/location/${id}`,{area,date});
    let json =  await result.data;
    return json;
  },
  // excluir reservas do usuario especifico
  deleteReservUser: async(id)=>{
    let result = await api.delete(`/location/delete/${id}`);
    let json = await result.data;
    return json;
  }
}