import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { HomePage } from './styled';

import {doLogin} from '../../helpers/AuthHandler';
import api from '../../api/UserApi';

const Home = ()=>{
  const navegate = useNavigate();

  const [ warning, setWarning ] = useState('');
  const [error, setError] = useState('');
  const [ disabled, setDisabled] = useState(false);
  const [apartament, setApartament ] = useState('');
  const [password, setPassword] = useState('');

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

  return(
    <HomePage>
      <div className="container">
        <h2>Condominium Security</h2>
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

        </div>
      </div>
    </HomePage>
  )
}

export default Home;