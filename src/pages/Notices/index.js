/* eslint-disable no-unused-vars */
/* eslint-disable default-case */
import React,{useState,useEffect} from 'react';

import { Container } from './styled';

// api 
import api from '../../api/NoticesApi';

import Aside from '../../components/Aside';

const Notices = ()=>{
  const [notice, setNotice ] = useState([]);
  useEffect(()=>{
    const result = async()=>{

      let json = await api.noticesAll();
      if(json.notices){
        setNotice(json.notices)
      }else{
        alert('Não há Avisos')
      }
    }
    result();
  },[])

  return (
    <Container>
      <Aside />
      <div className="notices">
        <h2>Avisos</h2>

      <div className="info">
        {notice.map((item)=>{
          return(
            <div className='info-card' key={item.id}>
              <span>{item.title}</span>
              <p>{item.description}</p>
            </div>
          )
        })}

      </div>

      </div>
    </Container>
  )
};

export default Notices;