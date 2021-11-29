import React,{useState,useEffect} from 'react';
import { Container } from './styled';

import Aside from '../../components/Aside';

import api from '../../api/LocationApi';
import userApi from '../../api/ApartamentsApi';

const Location = ()=>{

  const [ location, setLocation ] = useState([]);
  const [ userReserves, setUserReserves ] = useState([]);
  const [ deleteUserReserv, setDeleteUserReserv ] = useState([]);
  const [ reserves, setReserves ] = useState([]);

  const [ warning, setWarning ] = useState('');
  const [ area, setArea ] = useState('');
  const [ apartament, setApartament ] = useState('');
  const [ proprietary, setProprietary ] = useState('');
  const [ date, setDate ] = useState('');
  const [ dateModal, setDateModal ] = useState('');
  const [ areaModal, setAreaModal ] = useState('');
  const [idUser,setIdUser] = useState('');

  const [allReserves, setAllReserves] = useState(false);
  const [ locations, setLocations ] = useState(false);
  const [ reserv, setReserv ] = useState(false);
  const [editReserv, setEditReserv ] = useState(false);
  const [ deleteReserv, setDeleteReserv ] = useState(false);
  const [ modal, setModal ] = useState(false);


  useEffect(()=>{

    const locations = async()=>{
      let json = await api.reserves();
      if(json.locations.length > 0){
        setLocations(true);
        setLocation(json.locations);
      }
    }
    locations();
  },[]);

  const handleReserves = async()=>{
    setAllReserves(true);
    setDeleteReserv(false);
    setLocations(false);
    setReserv(false);
    setEditReserv(false);
    let result = await api.reserves();
    if(result.locations.length > 0){
      setReserves(result.locations);
    }else{
      setReserves([]);
    }

  }

  const handleOpenReserv = async()=>{
    setReserv(true);
    setLocations(false);
    setAllReserves(false);
    setEditReserv(false);
    setDeleteReserv(false);

    let user = await userApi.userApartament();
    if(user.apartament){
      setProprietary(user.apartament.proprietary);
      setApartament(user.apartament.apartament);
    }else{
      setProprietary('');
      setApartament('');
    }
    
  };
  
  const handleEditReserv = async()=>{
    setEditReserv(true);
    setLocations(false);
    setReserv(false);
    setDeleteReserv(false);
    setAllReserves(false);

    let json = await api.getReservUser();
    if(json.userLocation){
      setUserReserves(json.userLocation)
      setDeleteUserReserv(json.userLocation)
    }else{
      setUserReserves([]);
    }
  };

  const handleDeleteReserv = async()=>{
    setDeleteReserv(true);
    setLocations(false);
    setReserv(false);
    setEditReserv(false);
    setAllReserves(false);

    let json = await api.getReservUser();
    if(json.userLocation){
      setDeleteUserReserv(json.userLocation)
    }else{
      setDeleteUserReserv([]);
    }
  };

  const handleConfirmReserv = async(e)=>{
    e.preventDefault();
    let newDate = date.split('-').reverse().join('/');

    if(area && apartament && newDate && proprietary !== ''){
      await api.reserv(area, apartament, newDate, proprietary);
      window.location.reload();


    }else{
      setWarning('Preencha todos os campos...');
      setTimeout(()=>{
        setWarning('');
      },2700)
    }

  };

  const handleCloseReserv = ()=>{
    setReserv(false);
    setLocations(true);
    setEditReserv(false);
    setAllReserves(false);
  };


  const handleEditReservModal = (item)=>{
    setModal(true);
    setAreaModal(item.area);
    setIdUser(item.id)
  };

  const handleConfirmReservModal = async(e)=>{
    e.preventDefault();

    if(areaModal && dateModal !== ''){
      let newDate = dateModal.split('-').reverse().join('/');
      await api.confirmReserv(areaModal,newDate,idUser);
      setModal(false);
      window.location.reload();
    }else{
      setWarning('Preencha os campos...');
      setTimeout(()=>{
        setWarning('');
      },2700)
    }  
  };

  const handleCloseModal = ()=>{
    setModal(false);
  }


  const handleDeleteReservModal = async(item)=>{

    if(item){
      await api.deleteReservUser(item.id);
    }
  }

  return(
    <Container>
      <Aside />
      <div className="description">
        <h2>Reservas</h2>
        <div className="buttons-location">
          <button onClick={handleReserves}>Exibir reservas</button>
          <button onClick={handleOpenReserv}>Agendar Reserva</button>
          <button onClick={handleEditReserv}>Editar Reserva</button>
          <button onClick={handleDeleteReserv}>Excluir Reserva</button>
        </div>

        <div className="location-description">
          {allReserves && 
            reserves.map((item)=>{
              return(
                <div className="descriptions-items" key={item.id}>
                  <b>Local: </b><span>{item.area}</span>
                  <b>Apartamento:</b><span>{item.apartament}</span>
                  <b>Responsavel: </b><span>{item.proprietary}</span>
                  <b>Data da reserva: </b><span>{item.date}</span>
                </div>
              )
            })
          }

        </div>
        <div className="location-description">
          {locations && 
            location.map((item)=>{
              return(
                <div className="descriptions-items" key={item.id}>
                  <b>Local: </b><span>{item.area}</span>
                  <b>Apartamento:</b><span>{item.apartament}</span>
                  <b>Responsavel: </b><span>{item.proprietary}</span>
                  <b>Data da reserva: </b><span>{item.date}</span>
                </div>
              )
            })
          }

        </div>
          {reserv && 
            <div className="reservation">
              {warning && <span className="warning">{warning}</span>}
              <h2>Agendar Reserva</h2>
              <form onSubmit={handleConfirmReserv}>
                <label>
                  Apartamento:
                  <input type='text' className="active" value={apartament} onChange={e=>setApartament(e.target.value)} />
                </label>
                <label>
                  Responsavel:
                  <input type='text' className="active" value={proprietary} onChange={e=>setProprietary(e.target.value)} />
                </label>
                <label>
                  Local:
                  <input type='text' value={area} onChange={e=>setArea(e.target.value)} />
                </label>
                <label>
                  Data da Reserva:
                  <input type='date' className="date" value={date} onChange={e=>setDate(e.target.value)}/>
                </label>
                <div className="buttons-form">
                  <button type="reset" onClick={handleCloseReserv}>Cancelar</button>
                  <button type="submit">Reservar</button>
                </div>
              </form>
            </div>
          }

          {editReserv && 
            <div className="location-description">
            {editReserv && 
              userReserves.map((item)=>{
                return(
                  <div className="descriptions-items" key={item.id}>
                    <b>Local: </b><span>{item.area}</span>
                    <b>Apartamento:</b><span>{item.apartament}</span>
                    <b>Responsavel: </b><span>{item.proprietary}</span>
                    <b>Data da reserva: </b><span>{item.date}</span>
                    <button type="submit" onClick={()=>handleEditReservModal(item)}>Editar</button>
                  </div>
                )
              })
            }

          </div>
          }

          {modal && 
            <div className="modal">
              <div className="modal-description">
              {warning && <span className="warning">{warning}</span>}
                <h2>Editar Reserva.</h2>
                <form onSubmit={handleConfirmReservModal}>
                  <label>
                    Local:
                    <input type="text" value={areaModal} onChange={e=>setAreaModal(e.target.value)} />
                  </label>
                  <label>
                    Data da Reserva:
                    <input type="date" value={dateModal} onChange={e=>setDateModal(e.target.value)} />
                  </label>
                  <div className="modal-buttons">
                    <button type='reset' onClick={handleCloseModal}>Cancelar</button>
                    <button type='submit'>Salvar</button>
                  </div>
                </form>
              </div>
            </div>
          }

          {deleteReserv && 
            <div className="location-description">
            {deleteUserReserv && 
              deleteUserReserv.map((item)=>{
                return(
                  <div className="descriptions-items" key={item.id}>
                    <b>Local: </b><span>{item.area}</span>
                    <b>Apartamento:</b><span>{item.apartament}</span>
                    <b>Responsavel: </b><span>{item.proprietary}</span>
                    <b>Data da reserva: </b><span>{item.date}</span>
                    <button type="submit" onClick={()=>handleDeleteReservModal(item)}>Excluir</button>
                  </div>
                )
              })
            }

          </div>
          }

      </div>
    </Container>
  )
};

export default Location;