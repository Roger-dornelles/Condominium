import React from 'react';
import Cookies from 'js-cookie';
import { Link,useNavigate } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";

import {Container } from './styled';


const Aside = ()=>{
  const navegate = useNavigate();

  const handleClose = ()=>{
    Cookies.remove('token')
    navegate("/");
  }
  return (
    <Container>
          <aside>
        <div className="logo">
          <p><AiFillHome/></p>
          <span>Painel</span>
        </div>

        <div className="menu">
          <nav>
            <Link to="/Avisos">Avisos</Link>
            <Link to="/Reclamacoes">Reclamações</Link>
            <Link to="/Apartamentos" >Apartamentos</Link>
            <Link to="/Reservas">Reservas</Link>
            <Link to="/Reunioes">Reuniões</Link>
            <button onClick={handleClose}>Sair</button>
          </nav>
        </div>
      </aside>
    </Container>
  )
};

export default Aside;