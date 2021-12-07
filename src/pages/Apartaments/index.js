import React,{ useState, useEffect} from 'react';
import { Container } from './styled';

import api from '../../api/ApartamentsApi';

import Aside from '../../components/Aside';

const Apartament = ()=>{

  const [apartaments, setApartaments] = useState([]);

  useEffect(()=>{

    const apartament = async()=>{
      let json = await api.apartamentsAll();
      if(json.apartaments){
        setApartaments(json.apartaments);
      }

    }
    apartament();
  },[]);


  return (<>
    <Container >
    <Aside />
      <div className="apartament">
        <h2>Apartamentos</h2>


        <div className="description-apartament">
          {
            apartaments.map((item)=>{
              return(
                <div className="description" key={item.id}>
                  <div className="description-item">
                    <span>Apartamento</span>
                    <p>{item.apartament}</p>
                  </div>
                  <div className="description-item">
                    <span>Proprietario</span>
                    <p>{item.proprietary}</p>
                  </div>
                  <div className="description-item">
                    <span>Contato</span>
                    <p>{item.contact}</p>
                  </div>
                </div>
              )
            })
          }
          
        </div>
      </div>
    </Container>
    </>
  )
};

export default Apartament;