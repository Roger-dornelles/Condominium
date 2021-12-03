import React,{useState} from 'react';
import { mask } from 'remask';
import {useNavigate} from 'react-router-dom';
import { HomePage } from './styled';

import {doLogin} from '../../helpers/AuthHandler';
import api from '../../api/UserApi';

const Home = ()=>{
  const navegate = useNavigate();

  const [ warning, setWarning ] = useState('');
  const [error, setError] = useState('');
  const [apartament, setApartament ] = useState('');
  const [password, setPassword] = useState('');
  const [ newName, setNewName ] = useState('');
  const [ newPassword, setNewPassword ] = useState('');
  const [ confirmNewPassword, setConfirmNewPassword ] = useState('');
  const [ newApartament, setNewApartament ] = useState('');
  let [ newContact, setNewContact ] = useState('');
  
  const [ disabled, setDisabled] = useState(false);
  const [ login, setLogin] = useState(true);
  const [ newUser, setNewUser ] = useState(false);

  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(password && apartament !== ''){
      setDisabled(true);
      let json = await api.signin(apartament,password);

      setTimeout(()=>{

        if(json.token){
          doLogin(json.token);
          localStorage.setItem('token',json.token);
          localStorage.setItem('id',json.id)
          setWarning('Usuario logado...');
          
          setTimeout(()=>{
            setWarning('');
            navegate("/Avisos" );
            window.location.reload("/Avisos")
          },2700);
        };
        
        setDisabled(false)
      },2700)
      
      if(json.error !== ''){
        setError(json.error);
        setTimeout(()=>{
          setError('')
        },2750)
      }

  }else{
    setError('Preencha todos os campos...');
    setTimeout(()=>{
      setError('');
    },2750)
  }
}

  const handleAddUser = () => {
    setNewUser(true);
    setLogin(false);
  };

  const handleAddNewUser = async(e) => {
    e.preventDefault();
    
    if(newName && newApartament && newContact !== ''){

      if(newPassword !== confirmNewPassword){
        setWarning('Senhas diferentes....');
        setTimeout(()=>{
          setWarning('');
        },2500)
      }else{
        const patterns = ['(99) 99999-9999'];
        newContact = mask(newContact, patterns);
        let json = await api.createUser(newName, newApartament, newContact, newPassword);
        localStorage.setItem('token',json.token);
        localStorage.setItem('id',json.id)
        doLogin(json.token);
        navegate("/Avisos" );
        window.location.reload("/Avisos");
      }
      

    }else{
      setWarning('Preencha todos os campos...');
      setTimeout(()=>{
        setWarning('');
      },2500)
    };

  }

  const handleCloseAddUser = ()=> {
    setNewUser(false);
    setLogin(true);
  }

  return(
    <HomePage>
      <div className="container">
        <h2>Condominium Security</h2>
        {login && 
        
          <div className="form-container">
            { warning && <span className="warning">{warning}</span> }
            { error && <span className="error">{error}</span> }
            <h3>Digite seu Login.</h3>
            <form onSubmit={handleSubmit}>
              <label>
                Apartamento: <input type="text" value={apartament} onChange={e=>setApartament(e.target.value)} />
              </label>
              <label>
                Senha: <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
              </label>
              <label>
                <button type="submit">{disabled ? 'Aguarde...' : 'Login'}</button>
              </label>
            </form>
            <p>Você é novo? <button type="submit" onClick={handleAddUser}>Clique Aqui</button></p>
          </div>
        }

        { newUser && 
          <div className="container-newUser">
            { warning && <span className="warning">{warning}</span> }
            { error && <span className="error">{error}</span> }
            <h2>Novo Usuario.</h2>
            <form onSubmit={handleAddNewUser}>
              <label>
                Apartamento: 
                <input type="text" value={newApartament} onChange={e=>setNewApartament(e.target.value)} />
              </label>
              <label>
                Nome completo:
                <input type="text" value={newName} onChange={e=>setNewName(e.target.value)}/>
              </label>
              <label>
                Celular:
                <input type="text" value={newContact} onChange={e=>setNewContact(e.target.value)} />
              </label>
              <label>
                *Senha: 
                <input type="password" value={newPassword} onChange={e=>setNewPassword(e.target.value)} />
                {(newPassword.length < 6) ?
                <span style={{color: 'red',fontSize:'14px'}}>Senha com mais de 6 digitos.</span> :''
                }
                
              </label>
              {(newPassword.length >= 6) ? 
                <label>
                confirme sua senha: 
                <input type="password" value={confirmNewPassword} onChange={e=>setConfirmNewPassword(e.target.value)} />
               </label> : ''
              }
              <div className="buttons-newUser">
                <button type="reset" onClick={handleCloseAddUser}>Cancelar</button>
                <button type="submit">Salvar</button>
              </div>
            </form>
          </div>
        }
      </div>
    </HomePage>
  )
}

export default Home;