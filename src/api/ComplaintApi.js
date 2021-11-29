/* eslint-disable import/no-anonymous-default-export */
import api from './ApiConfig';

export default {
  //exibir todas reclamações
  complaintAll: async()=>{
    let result = await api.get('/complaints');
    let json = await result.data;
    return json;
  },
  // criar reclamação
  createComplaint: async(description,image)=>{
    let id = localStorage.getItem('id');
    let body = new FormData();

    if(description){
      body.append('description',description);
    }

    if(image){
      body.append('image',image);
    }
    let result = await api.post(`/complaint/${id}`,body);
    let json = await result.data;
    return json;
  },
  //deletar reclamação
  deleteComplaint: async(id)=>{
    let result = await api.delete(`/complaint/${id}`);
    let json = await result.data;
    return json;
  },
  //exibir reclamaçoes do usuario especifico
  userComplaints: async()=>{
    let id  = localStorage.getItem('id')
    let result = await api.get(`/user/complaints/${id}`);
    let json = await result.data;
    return json;
  },
  //atualizar reclamaçoes do usuario especifico
  updateComplaint: async(data)=>{

    let id = data.id;

    let body = new FormData();
    if(data.image){
      body.append('image', data.image);
    };

    if(data.description){
      body.append('description', data.description);
    };

    if(data.conclusion){
      body.append('conclusion', data.conclusion);
    };

    let result = await api.put(`/complaint/${id}`, body);
    let json = await result.data;
    return json;
  }


}