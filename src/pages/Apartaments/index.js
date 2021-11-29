import React,{ useState, useEffect} from 'react';
import { Container } from './styled';

import api from '../../api/ApartamentsApi';

import Aside from '../../components/Aside';

const Apartament = ()=>{

  const [ modal, setModal ] = useState(false);
  const [ disabled, setDisabled ] = useState(true);
  const [ warning, setWarning ] = useState('');
  const [ success, setSuccess ] = useState('');

  const [apartaments, setApartaments] = useState([]);
  const [userApartament, setUserApartament] = useState('');
  const [ userContact, setUserContact] = useState('');
  const [ userName,setUserName ] = useState('');

  useEffect(()=>{

    const apartament = async()=>{
      let json = await api.apartamentsAll();
      if(json.apartaments){
        setApartaments(json.apartaments);
      }

    }
    apartament();
  },[]);

  const handleOpenModal = async()=>{
    setModal(true);
    setDisabled(true);
    let json = await api.userApartament();
    if(json.apartament){
      setUserApartament(json.apartament.apartament);
      setUserName(json.apartament.proprietary);
      setUserContact(json.apartament.contact);
    }
  };

  const handleCloseModal = ()=>{
    setModal(false);
  }

  const handleConfirmUpdate = async(e)=>{
    e.preventDefault();
    if(userName || userContact !== ''){
      await api.updateApartament(userName,userContact);
      setSuccess('Dados atualizados...');

      setTimeout(()=>{
        setModal(false);
        setSuccess('')
        window.location.reload();
      },2700)

    }else{
      setWarning('Preencha todos os campos...');
      setTimeout(()=>{
        setWarning('');
      },2500)
    }
  }


  return (
    <Container >
      <Aside />
      { modal && 
      
        <div className="modal">
          <div className="modal-description">
            {warning && 
              <span className="warning">{warning}</span>
            }
            {
              success && <span className="success">{success}</span>
            }
            <h3>Atualizar dados.</h3>
            <form onSubmit={handleConfirmUpdate}>
              <label>
                Apartamento:
                <input type="text" disabled={disabled} value={userApartament} onChange={e=>setUserApartament(e.target.value)} />
              </label>
              <label>
                Nome:
                <input type="text" value={userName} onChange={e=>setUserName(e.target.value)}  />
              </label>
              <label>
                Contato:
                <input type="text" value={userContact} onChange={e=>setUserContact(e.target.value)} />
              </label>
              <div className="modal-buttons">
              <button className="btn-close" onClick={handleCloseModal}>Cancelar</button>
              <button>Atualizar</button>
              </div>
            </form>
          </div>
        </div>
      }
      <div className="apartament">
        <h2>Apartamentos</h2>
          <div className="button">
            <button onClick={handleOpenModal}>Atualizar dados</button>
          </div>

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
  )
};

export default Apartament;