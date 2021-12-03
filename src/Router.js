import React from 'react';
import { Route, Routes } from "react-router-dom";

//pages
import Apartament from './pages/Apartaments';
import Complaint from './pages/Complaint';
import Home from './pages/Home';
import Location from './pages/Location';
import Meetings from './pages/Meetings';
import NotFound from './pages/NotFound';
import Notices from './pages/Notices';
import UserInfo from './pages/UserInfo';

//helpers
import { isLogged } from './helpers/AuthHandler';

const Router = ()=>{
  const logged = isLogged();
  return (
    
    <Routes>
      { logged && 
        <>

          <Route exact path="/Avisos" element={<Notices />} />
          <Route exact path="/Reclamacoes" element={<Complaint />} />
          <Route exact path="/Apartamentos" element={<Apartament />} />
          <Route exact path="/Reservas" element={<Location />} />
          <Route exact path="/Reunioes" element={<Meetings />} />
          <Route exact path="/user/info" element={<UserInfo />} />
          
        </>
      }
      {!logged && 
      <>
        <Route exact path="/" element={<Home />} />
        <Route element={<NotFound />} />
      </>
      }
    </Routes>
  )

};

export default Router;