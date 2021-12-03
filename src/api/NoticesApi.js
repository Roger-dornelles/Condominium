/* eslint-disable import/no-anonymous-default-export */
import  api from './ApiConfig';

export default {
  //exibir todos os avisos
  noticesAll: async()=>{
    let result = await  api.get('/notices');
    let json = await result.data;
    return json;
  },
  //criar aviso
  createNotice: async(title, description)=>{
    let result = await api.post('/notice',{title,description});
    let json = await result.data;
    return json;
  },
  //atualizar Aviso
  updateNotice: async(id,title, description)=>{
    let result = await api.put(`/notice/${id}`,{title,description});
    let json = await result.data;
    return json;
  },
  // excluir Aviso
  deleteNotice: async(id)=>{
    let result = await api.delete(`/notice/${id}`)
    let json = await result.data;
    return json;
  }
}