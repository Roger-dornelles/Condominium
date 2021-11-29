import React,{useState, useEffect} from 'react';
import { Container } from './styled';

import Aside from '../../components/Aside';

import api from '../../api/MeetingsApi';

const Meetings = ()=>{
  const [ meetings, setMeetings ] = useState([]);

  const [allMeetings, setAllMeetings] = useState(false);
  const [ createMeeting, setCreateMeeting ] = useState(false);
  const [ updateMeeting, setUpdateMeeting ] = useState(false);
  const [ modal,setModal ] = useState(false);
  const [ deleteMeeting, setDeleteMeeting ] = useState(false);

  const [ warning, setWarning] = useState('');
  const [description, setDescription ] = useState('');
  const [ date, setDate ] = useState('');
  const [ time, setTime ] = useState('');
  const [ editDate, setEditDate ] = useState('');
  const [ editTime, setEditTime ] = useState('');
  const [ editDescription, setEditDescription ] = useState('');
  const [ cancel, setCancel ] = useState('');
  const [ editId, setEditId ] = useState('');


  useEffect(()=>{
    const meeting = async()=>{
      setAllMeetings(true);
      let json = await api.getMeetings();
      if(json.meetings){
        setMeetings(json.meetings);
      }else{
        setMeetings([]);
      }
    };
    meeting();
  },[]);

  const handleOpenMeetings =()=>{
    setAllMeetings(true);
    setCreateMeeting(false);
    setUpdateMeeting(false);
    setDeleteMeeting(false);
  };

  const handleCreateMeeting = ()=>{
    setCreateMeeting(true);
    setAllMeetings(false);
    setUpdateMeeting(false);
    setDeleteMeeting(false);
  }

  const handleUpdateMeeting = ()=>{
    setUpdateMeeting(true);
    setCreateMeeting(false);
    setAllMeetings(false);
    setDeleteMeeting(false);

  };

  const handleDeleteMeeting = ()=>{
    setDeleteMeeting(true);
    setUpdateMeeting(false);
    setCreateMeeting(false);
    setAllMeetings(false);

  };

  const handleCancelCreate = ()=>{
    setAllMeetings(true);
    setCreateMeeting(false);
    setDescription('');
    setDate('');
  };

  const handleSubmitCreateMeeting = async(e)=>{
    e.preventDefault();

    let dateFormat = date.split('-').reverse().join('/');
    if(date && description && time !== ''){
      await api.createMeeting(dateFormat,description,time);
      setAllMeetings(true);
      window.location.reload();
      setCreateMeeting(false);
      setDescription('');
      setDate('');
    }else{
      setWarning('Preencha os campos...');
      setTimeout(()=>{
        setWarning('');
      },2700);
    }

  };

  const handleUpdateOneMeeting = (item) => {
    setModal(true);
    setEditTime(item.schedule);
    setEditDescription(item.description);
    setEditId(item.id);
  };

  const handleEditMeetingModal = async(e) => {
    e.preventDefault();

    if(editDate &&  editTime && editDescription !== '') {
      let date = editDate.split('-').reverse().join('/');
      let json = await api.editMeeting(editId,date,editDescription, editTime, cancel)
      if(json.meeting){
        setModal(false);
        window.location.reload();
      }else{
        setWarning(json.error);
        setTimeout(() => {
          setWarning('');
        },2500)
      }

    }else{
      setWarning('Preencha todos os campos...');
      setTimeout(() =>{
        setWarning('');
      },2500)
    }

  };

  const handleCloseEditModal = ()=>{
    setModal(false);
  };

  const handleDeleteOneMeeting = async(item)=>{
    if(item.id){
      await api.deleteOneMeeting(item.id);
      window.location.reload();
    }
  }

  return(
    <Container>
      <Aside />
      <div className="container">
        <h2>Reuniões</h2>
        <div className="buttons-meetings">
          <button onClick={handleOpenMeetings}>Exibir Reuniões</button>
          <button onClick={handleCreateMeeting}>Adicionar Reunião</button>
          <button onClick={handleUpdateMeeting}>Editar Reunião</button>
          <button onClick={handleDeleteMeeting}>Excluir Reunião</button>
        </div>
        <div className="container-meetings">
          {allMeetings && 
            meetings.map((item)=>{
              return(
                <div className="meetings-descriptions" key={item.id}>
                  <b>Assunto:</b> <span>{item.description}</span>
                  <b>Data da Reunião:</b> <span>{item.date}</span>
                  <b>Horario:</b> <span>{item.schedule} Horas</span>
                  <span style={{backgroundColor:(item.canceled === '1')? 'red' : ''}}>{(item.canceled === '1') ? 'Cancelado': ''}</span>
                </div>
              )
            })
          }

          {createMeeting && 
            <div className="create-meeting">
              {warning && <span className="warning">{warning}</span>}
              <h2>Adicionar Reunião.</h2>
              <form onSubmit={handleSubmitCreateMeeting}>
                <label>
                  Assunto:
                  <input type="text" value={description} onChange={e=>setDescription(e.target.value)} />
                </label>

                <label>
                  Data da Reunião:
                  <input type="date" value={date} onChange={e=>setDate(e.target.value)}/>
                </label>
                <label>
                  Horario:
                  <input type="time" value={time} onChange={e=>setTime(e.target.value)}/>
                </label>
                <div className="buttons-create-meeting">
                  <button type="reset" onClick={handleCancelCreate}>Cancelar</button>
                  <button type="submit">Salvar</button>
                </div>
              </form>
            </div>
          }

          {updateMeeting && 
          
              meetings.map((item)=>{
              return(
                <div className="meetings-descriptions" key={item.id}>
                  <b>Assunto:</b> <span>{item.description}</span>
                  <b>Data da Reunião:</b> <span>{item.date}</span>
                  <b>Horario:</b> <span>{item.schedule} Horas</span>
                  <span style={{color:(item.canceled === '1') ? 'red': ''}}>{(item.canceled === '1') ? 'Cancelado': ''}</span>
                  <button type="submit" onClick={()=>handleUpdateOneMeeting(item)}>Editar</button>
                </div>
              )
            })
          
          }

          {modal && 
            <div className="modal">
              <div className="modal-description">
              {warning && <span className="warning">{warning}</span>}
                <h2>Editar Reunião.</h2>
                <form onSubmit={handleEditMeetingModal}>
                  <label>
                    Assunto:
                    <input type="text" value={editDescription} onChange={e=>setEditDescription(e.target.value)}  />
                  </label>
                  <label>
                    Data da Reunião:
                    <input type="date" value={editDate} onChange={e=>setEditDate(e.target.value)} />
                  </label>
                  <label>
                    Horario:
                    <input type="time" value={editTime} onChange={e=>setEditTime(e.target.value)}/>
                  </label>
                  <label style={{color:'red'}}>
                    Deseja Cancelar a Reunião?
                    <select onChange={e=>setCancel(e.target.value)}>
                      <option value="">escolha uma opção</option>
                      <option value="false">Não</option>
                      <option value="true">Sim</option>
                    </select>
                  </label>
                  <div className="modal-buttons">
                    <button type="reset" onClick={handleCloseEditModal}>Cancelar</button>
                    <button type="submit">Salvar</button>
                  </div>
                </form>
              </div>
            </div>
          }

          {deleteMeeting && 
            meetings.map((item)=>{
              return(
                <div className="meetings-descriptions" key={item.id}>
                  <b>Assunto:</b> <span>{item.description}</span>
                  <b>Data da Reunião:</b> <span>{item.date}</span>
                  <b>Horario:</b> <span>{item.schedule} Horas</span>
                  <span style={{color:(item.canceled === '1') ? 'red': ''}}>{(item.canceled === '1') ? 'Cancelado': ''}</span>
                  <button type="submit" onClick={()=>handleDeleteOneMeeting(item)}>Excluir</button>
                </div>
              )
            })
          }
        </div>

      </div>

    </Container>

  )
};

export default Meetings;