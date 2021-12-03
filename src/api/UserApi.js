/* eslint-disable import/no-anonymous-default-export */
import api from './ApiConfig';

export default {
  //login do usuario
  signin: async (apartament,password)=>{
    let result = await api.post('/user/signin',{password,apartament})
    let json = await result.data;
    return json;
  },
  // exibir informações do usuario especifico
  infoAll: async()=>{
    let id  = localStorage.getItem('id')
    let result = await api.get(`/user/info/${id}`);
    let json = await result.data;
    return json;
  },
  //atualizar dados do usuario
  updateUser: async(contact,apartament,password,name)=>{
    let id = localStorage.getItem('id');
    let body = {};
    if(name){
      body.name = name;
    }

    if(password){
      body.apartament = apartament;
    }

    if(contact){
      body.contact = contact;
    }

    if(apartament){
      body.password = password;
    }
    let result = await api.put(`/user/info/${id}`,body);
    let json = await result.data;
    return json;
  },
  //cadastrar usuario 
  createUser: async(name, apartament, contact ,password)=>{
    let result = await api.post('/user/new',{name, apartament, contact ,password});
    let json = await result.data;
    return json;
  }
}