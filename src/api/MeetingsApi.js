/* eslint-disable import/no-anonymous-default-export */
import api from './ApiConfig';

export default {
  // exibir reuniões
  getMeetings: async()=>{
    let result = await api.get('/meetings');
    let json =  await result.data;
    return json;
  },
  //criar reunião
  createMeeting: async(date,description,schedule)=>{
    //let id = localStorage.getItem('id');
    let result = await api.post(`/meeting`,{date,description,schedule});
    let json = await result.data;
    return json;
  },
  editMeeting: async(id,date,description,schedule,canceled)=>{
  let result = await api.put(`/meeting/${id}`,{date,description,schedule,canceled})
  let json = await result.data;
  return json;
  },
  // deletar reunião especifica pelo id
  deleteOneMeeting: async(id)=>{
    let result = await api.delete(`/meeting/${id}`);
    let json = await result.data;
    return json;
  }
}