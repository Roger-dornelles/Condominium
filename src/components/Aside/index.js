import React,{useState} from 'react';
import Cookies from 'js-cookie';
import { Link,useNavigate } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { FaRegSun, FaAlignJustify,FaTimes } from "react-icons/fa";

import {Container } from './styled';


const Aside = ()=>{
  const navegate = useNavigate();
  const [openMenu,setOpenMenu ] = useState(true);

  const handleClose = ()=>{
    Cookies.remove('token')
    navegate("/");
    window.location.reload();
  };

  const handleMenuOpen = ()=>{
    setOpenMenu(!openMenu);
  }


  return (
    <Container>
      <aside className="aside-desktop">
        <div className="logo-desktop">
          <p><AiFillHome/></p>
          <span>Painel</span>
        </div>

        <div className="menu-desktop">
          <nav>
            <Link to="/Avisos">Avisos</Link>
            <Link to="/Reclamacoes">Reclamações</Link>
            <Link to="/Apartamentos" >Apartamentos</Link>
            <Link to="/Reservas">Reservas</Link>
            <Link to="/Reunioes">Reuniões</Link>
            <button onClick={handleClose}>Sair</button>
          </nav>
        </div>
        <div className="config-desktop">
          <b><FaRegSun /><Link to="/user/info">configurações</Link></b>
        </div>
      </aside>
      <div className="menu-hamburguer" onClick={handleMenuOpen}>
        {openMenu ? <FaTimes style={{color: 'red',fontSize: '2.3rem'}} /> : <FaAlignJustify />}
      </div>
      {openMenu && 

        <aside className="aside-mobile">
        <div className="logo-mobile">
          <p><AiFillHome/></p>
          <span>Painel</span>
        </div>

        <div className="menu-mobile">
          <nav>
            <Link to="/Avisos">Avisos</Link>
            <Link to="/Reclamacoes">Reclamações</Link>
            <Link to="/Apartamentos" >Apartamentos</Link>
            <Link to="/Reservas">Reservas</Link>
            <Link to="/Reunioes">Reuniões</Link>
            <button onClick={handleClose}>Sair</button>
          </nav>
        </div>
        <div className="config-mobile">
          <b><FaRegSun /><Link to="/user/info">configurações</Link></b>
        </div>
        </aside>
      
      }
    </Container>
  )
};

export default Aside;