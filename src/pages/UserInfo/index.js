import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { mask } from 'remask';

import {UserPage} from './styled';

import api from '../../api/UserApi';

const UserInfo = ()=>{
  const [ userInfo, setUserInfo ] = useState([]);

  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');
  const [ name, setName ] = useState('');
  let [ contact, setContact ] = useState('');
  const [ apartament, setApartament ] = useState('');

  const [ user, setUser ] = useState(false);
  const [ editInfo , setEditInfo ] = useState(false);



  useEffect(()=>{

    const infoUser = async()=>{
      let json = await api.infoAll();
      if(json.user){
        setUser(true);
        setUserInfo([json.user]);
      }else{
        setUserInfo([]);
      };
  
    };
    infoUser();
  },[]);

  const handleEditInfo = ()=>{
    setEditInfo(true);
    setUser(false);
    if(userInfo[0]){
      setName(userInfo[0].name);
      setContact(userInfo[0].contact);
      setApartament(userInfo[0].apartament)

    }
  };

  const handleCloseEdit = ()=>{
    setUser(true);
    setEditInfo(false);
  }

  const handleSubmitInfo = async(e)=>{
    e.preventDefault();
    const patterns = ['(99) 99999-9999'];
    contact = mask(contact, patterns);

    if(password !== confirmPassword){
      alert('senhas são diferentes...');
      return;
    }
    await api.updateUser(contact,apartament,password,name);
    window.location.reload();
  }


  return (
    <UserPage>
      <h2>Informações do Usuario</h2>
      <div className="info-user">
        {user && 
          userInfo.map((item)=>{
            return(

              <div className="info-container" key={item.id}>
                <div className="info">
                  <p>Nome: {item.name}</p>
                  <p>Apartamento: {item.apartament}</p>
                  <p>Contato: {item.contact}</p>
                </div>
                <div className="info-button">
                  <button type="submit"  onClick={handleEditInfo}>Editar</button>
                </div>
              </div>

            )
          })
        }

        {editInfo && 
          <div className="edit-container">
            <h3>Editar Informações.</h3>
            <form onSubmit={handleSubmitInfo}>
              <label>
                Nome: 
                <input type='text' value={name} onChange={e=>setName(e.target.value)} />
              </label>
              <label>
                Apartamento:
                <input type='text' value={apartament} onChange={e=>setApartament(e.target.value)} />
              </label>
              <label>
                Contato:
                <input type='text' value={contact} onChange={e=>setContact(e.target.value)} />
              </label>
              <label>
                *Senha:
                <input type='text' value={password} onChange={e=>setPassword(e.target.value)} />
                {password.length < 6 ?
                  <span style={{fontSize: '14px',color:'rgb(255,0,0)'}}>Senha com mais de 6 digitos</span> :''
                }
              </label>
              {password.length >= 6 ?
              <label>
              Confirmar senha:
              <input type='text' value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)}/>
              </label> :''  
              }
              <div className="buttons">
                <button type='reset' onClick={handleCloseEdit}>Cancelar</button>
                <button type='submit'>Salvar</button>
              </div>
            </form>
          </div>
        }
      </div>
        <Link to='/Avisos'>⤶ Voltar</Link>


    </UserPage>

  )

}

export default UserInfo;