/* eslint-disable no-unused-vars */
import React,{ useState,useEffect } from 'react';

import { Container } from './styled';

import Aside from '../../components/Aside';

import api from '../../api/ComplaintApi';

const Complaint = ()=>{
  const [image, setImage] = useState('')
  const [ description, setDescription ] = useState('');
  const [ options, setOptions ] = useState('');
  const [ updateDescription, setUpdateDescription ] = useState('');
  const [ updateImage, setUpdateImage ] = useState('');
  
  const [ complaints, setComplaints ] = useState([]);
  const [ warning, setWarning ] = useState('');
  const [deleteComplaint, setDeleteComplaint] = useState([]);
  const [ updateComplaints, setUpdateComplaints] = useState([]);
  const [ updateComplaint, setUpdateComplaint ] = useState([]);
  
  const [ modal, setModal ] = useState(false);
  const [ modalComplaint, setModalComplaint ] = useState(false);
  const [ modalAdd, setModalAdd ] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [ modalUpdateComplaints, setModalUpdateComplaints] = useState(false)
  const [ modalItemUpdate, setModalItemUpdate] = useState(false);


  useEffect(()=>{

    const handleComplaints = async ()=>{
      setModalComplaint(true)
      let json = await api.complaintAll();
      if(json.complaints){
        setComplaints(json.complaints);
      }else{
        alert('Não há Reclamações.')
      }
    }
    handleComplaints();

  },[]);

  const handleReloadComplaint = async ()=>{
    setModalComplaint(true)
    setModalUpdateComplaints(false)
    setModalDelete(false);
    setModalAdd(false);
  }

  const handleAddComplaint = ()=>{
    setModalAdd(true);
    setModalComplaint(false);
    setModalDelete(false);
    setModalUpdateComplaints(false);
    setModalItemUpdate(false)
  }

  const handleConfirmComplaint = async(e)=>{
    e.preventDefault();
    console.log(image)
    if(description === ''){
      setWarning('Adicione uma descrição...')
      setTimeout(()=>{
        setWarning('')
      },2500);
    }else{

      if(image){
        await api.createComplaint(description,image);
        return;
      }else{
        
        await api.createComplaint(description);
      }
        window.location.reload();
    }
  }
  const handleClose = ()=>{
    setModal(false);
  };

  const handleCloseModalAdd = ()=>{
    window.location.reload();
  }

  const handleDeleteComplaint = async()=>{
    setModalComplaint(false);
    setModalUpdateComplaints(false)
    setModalComplaint(false)
    setModalDelete(true);
    setModalAdd(false);
    let json = await api.userComplaints();
    if(json.complaints){
      setDeleteComplaint(json.complaints);
    }else{
      setDeleteComplaint([]);
    }
  }

  const handleDelete = async(item)=>{
    await api.deleteComplaint(item.id);
    window.location.reload();

  }

  const handleUpdateComplaint = async()=>{
    setModalComplaint(false)
    setModalDelete(false);
    setModalUpdateComplaints(true);
    setModalAdd(false);
    let json = await api.userComplaints();
    if(json.complaints){

      setUpdateComplaints(json.complaints);
    }else{
      setUpdateComplaints([]);
    }
  }

  const handleUpdate = (item)=>{
    setModal(true)
    setModalItemUpdate(true);
    setUpdateComplaint(item);    
  }
  
  const handleUpdateOneComplaint = async(e)=>{
    e.preventDefault();
    let data = {};
    data.id = updateComplaint.id;

    if(updateImage){
      data.image = updateImage;
    }
    
    if(options === 'true'){
      data.conclusion = 1;
    }
    
    if(updateDescription){
      data.description = updateDescription;
    }

    await api.updateComplaint(data);
    window.location.reload();

  }


  return(
    <Container>
      <Aside />

      {modal && 
      
        <div className="modal">
          {modalItemUpdate && 
            <div className="modalAdd">
              {warning && <p>{warning}</p>}
              <h2>Editar Reclamação</h2>
              <form onSubmit={handleUpdateOneComplaint}>
                <label>
                  Descrição: <textarea placeholder="descrição" value={updateDescription} onChange={e=>setUpdateDescription(e.target.value)}></textarea>
                </label>
                <label>
                  *Adicionar 1 imagem:
                  <input type="file" onChange={e=>setUpdateImage(e.target.files[0])}  />
                  <span style={{color:'red'}}>Imagem não Obrigatorio.</span>
                </label>

                <label>
                  Serviço concluido?
                  <select onChange={e=>setOptions(e.target.value)}>
                    <option value="">--------</option>
                    <option value="true">Sim</option>
                    <option value="false">Não</option>
                  </select>
                </label>
                <div className="buttons-btn">
                  <button type="reset" onClick={handleClose}>Cancelar</button>
                  <button type="submit">Adicionar</button>
                </div>
              </form>
            </div>
          }

        </div>
      }

      <div className="description">
        <h2>Reclamações</h2>
        <div className="buttons">
        <button onClick={handleReloadComplaint}>Exibir Reclamações</button>
          <button onClick={handleAddComplaint}>Criar Reclamação</button>
          <button onClick={handleUpdateComplaint}>Editar reclamação</button>
          <button onClick={handleDeleteComplaint}>Excluir reclamação</button>
        </div>

        <div className="description-complaints">
          {modalComplaint && 
            complaints.map((item)=>{

              return(
                <div className="complaint"  key={item.id}>
                  {item.image && 
                    <img src={item.image} alt='Sem imagem' />
                  }
                  <div className="description-items">
                    <b>Descrição: </b><span>{item.description}</span>
                    <b>Data da postagem: </b><span>{item.date_inicial}</span>
                    <b>{(item.date_conclusion !== 'Em Analise') ? 'Serviço Realizado:': 'Serviço:'} </b><span style={{backgroundColor:(item.date_conclusion === 'Em Analise')? 'rgb(0,200,0)': ''}}>{item.date_conclusion}</span>
                  </div>
                </div>
              )
            })
          }

          {modalAdd && 
            <div className="modalAdd">
                {warning && <p>{warning}</p>}
              <h2>Fazer uma Reclamação</h2>
              <form onSubmit={handleConfirmComplaint}>
                <label>
                  Descrição: <textarea placeholder="descrição" value={description} onChange={e=>setDescription(e.target.value)}></textarea>
                </label>
                <label>
                  *Adicionar 1 imagem:
                  <input type="file" onChange={e=>setImage(e.target.files[0])}  />
                  <span style={{color:'red'}}>Imagem não Obrigatorio.</span>
                </label>
                <div className="buttons-btn">
                  <button type="reset" onClick={handleCloseModalAdd}>Cancelar</button>
                  <button type="submit">Adicionar</button>
                </div>
              </form>
            </div>
          }

          {modalDelete && 
            deleteComplaint.map((item)=>{
            return(
              <div className="complaint"  key={item.id}>
                {item.image && 
                  <img src={item.image} alt='' />
                }
                <div className="description-items">
                  <b> Descrição: </b><span>{item.description}</span>
                  <b>Data da postagem: </b><span>{item.date_inicial}</span>
                  <b>Serviço: </b><span>{item.date_conclusion}</span>
                  <button onClick={()=>handleDelete(item)}>Excluir</button>
                </div>
              </div>
            )
            })
          }

          {modalUpdateComplaints && 
            updateComplaints.map((item)=>{
              return(
                <div className="complaint"  key={item.id}>
                  {item.image && 
                    <img src={item.image} alt='' />
                  }
                  <div className="description-items">
                    <b> Descrição: </b><span>{item.description}</span>
                    <b>Data da postagem: </b><span>{item.date_inicial}</span>
                    <b>Serviço: </b><span>{item.date_conclusion}</span>
                    <button onClick={()=>handleUpdate(item)}>Editar</button>
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

export default Complaint;