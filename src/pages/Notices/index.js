
import React,{useState,useEffect} from 'react';

import { Container } from './styled';

// api 
import api from '../../api/NoticesApi';

import Aside from '../../components/Aside';

const Notices = ()=>{

  const [notice, setNotice ] = useState([]);

  const [ alert, setAlert ] = useState('');
  const [ success, setSuccess ] = useState();
  const [warning, setWarning] = useState('');
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [ updateDescription, setUpdateDescription ] = useState('');
  const [ updateTitle, setUpdateTitle ] = useState('');
  const [ idNotice, setIdNotice ] = useState('');

  const [noticesAll, setNoticesAll] = useState(true);
  const [ addNotice, setAddNotice ] = useState(false);
  const [ updateNotice, setUpdateNotice ] = useState(false);
  const [ modal, setModal ] = useState(false);
  const [ deleteNotice, setDeleteNotice ] = useState(false);

  useEffect(()=>{
    const result = async()=>{

      let json = await api.noticesAll();
      if(json.notices){
        setNotice(json.notices);
      }else{
        setNotice([]);
      }
    }
    result();
  },[]);

  const handleChangeNoticesAll = ()=>{
    setNoticesAll(true);
    setAddNotice(false);
    setUpdateNotice(false);
    setDeleteNotice(false);
  };

  const handleAddNotice = ()=>{
    setAddNotice(true);
    setNoticesAll(false);
    setUpdateNotice(false);
    setDeleteNotice(false);
    setDeleteNotice(false);
  };

  const handleUpdateNotices = ()=>{
    setUpdateNotice(true);
    setAddNotice(false);
    setNoticesAll(false);
    setDeleteNotice(false);
    setDeleteNotice(false);
  };

  const handleDeleteNotice = ()=>{
    setDeleteNotice(true);
    setUpdateNotice(false);
    setAddNotice(false);
    setNoticesAll(false)

  }

  const handleSubmitAddNotice = async(e)=>{
    e.preventDefault();
    if(title && description !== ''){
      let json = await api.createNotice(title, description);
      if(json.newNotice){
        setSuccess('Adicionado com sucesso...');

        setTimeout(()=>{
          setSuccess('');
          setAddNotice(false);
          setNoticesAll(true);
          window.location.reload();
        },2500)
      }else{
        setAlert(json.error);
      }
    }else{
      setWarning('Preencha os campos...');
      setTimeout(()=>{
        setWarning('');

      },2500)
    }
  }

  const handleCloseAddNotice = ()=>{
    setAddNotice(false);
    setNoticesAll(true);
    window.location.reload();
  };

  const handleUpdateItemModal = (item)=>{
    setModal(true);

    if(item !== '' || item !== undefined || item !== null){
      setUpdateDescription(item.description);
      setUpdateTitle(item.title);
      setIdNotice(item.id);

    }

  };

  const handleUpdateItem = async(e)=>{
    e.preventDefault();
    if(updateDescription && updateTitle !== ''){
      let json = await api.updateNotice(idNotice, updateTitle,updateDescription);
      if(!json.error){
        setSuccess('Atualizado com sucesso...');

        setTimeout(()=>{
          window.location.reload();
        },2500);
      }
    }else{
      setWarning('Preencha todos os campos...');
      setTimeout(()=>{
        setWarning('');
      },2500)
    }
  };

  const handleCloseModal = ()=>{
    setModal(false);
  };

  const handleDeleteItem = async(item)=>{

    await api.deleteNotice(item.id);
    window.location.reload();

  }



  return (
    <Container>
      <Aside />
      <div className="notices">
        <h2>Avisos</h2>
        <div className="buttons-notices">
          <button onClick={handleChangeNoticesAll}>Exibir todos os avisos</button>
          <button onClick={handleAddNotice}>Adicionar Avisos</button>
          <button onClick={handleUpdateNotices}>Atualizar Aviso</button>
          <button onClick={handleDeleteNotice}>Excluir avisos</button>
        </div>

        <div className="info">
          {noticesAll && 
          
            notice.map((item)=>{
              return(
                <div className='info-card' key={item.id}>
                  <span>{item.title}</span>
                  <p>{item.description}</p>
                </div>
              )
            })
          }

          {addNotice && 
            <div className='noticeAll'>
              {alert && <span className="alert">{alert}</span>}
              {warning && <span className="warning">{warning}</span>}
              {success && <span className="success">{success}</span>}
              <h3>Adicionar Aviso.</h3>

              <form onSubmit={handleSubmitAddNotice}>
                <label>
                  Titulo:
                  <input type="text" value={title} onChange={e=>setTitle(e.target.value)} />
                </label>
                <label>
                  Descrição:
                  <textarea value={description} onChange={e=>setDescription(e.target.value)} placeholder='Descrição'>

                  </textarea>
                </label>
                <div className='buttons-noticeAll'>
                  <button type='reset' onClick={handleCloseAddNotice}>Cancelar</button>
                  <button type='submit'>Salvar</button>
                </div>
              </form>
            </div>
          }

          {updateNotice && 
            <div className='update-notices'>
              <h3>Atualizar Avisos</h3>
              <div className='list-notices'>
                {notice.map((item)=>{
                    return(
                      <div className='info-card' key={item.id}>
                        <span>{item.title}</span>
                        <p>{item.description}</p>
                        <button onClick={()=>handleUpdateItemModal(item)}>Editar</button>
                      </div>
                    )
                  })
                }

              </div>
            </div>
          }

          {modal && 
            <div className='modal-description'>
              <div className='modal-item'>
                {success && <span className="success">{success}</span>}
                {warning && <span className="warning">{warning}</span>}
                <h3>Editar Aviso.</h3>
                <form onSubmit={handleUpdateItem}>
                  <label>
                    Titulo:
                    <input type="text" value={updateTitle} onChange={e=>setUpdateTitle(e.target.value)} />
                  </label>
                  <label>
                    Descrição:
                    <textarea placeholder='Descrição' value={updateDescription} onChange={e=>setUpdateDescription(e.target.value)} />
                  </label>
                  <div className='modal-buttons'>
                    <button type='reset' onClick={handleCloseModal}>Cancelar</button>
                    <button type='submit'>Salvar</button>
                  </div>
                </form>
              </div>
            </div>
          }

          {deleteNotice && 
            <div className='delete-notice'>
              <h3>Excluir Aviso.</h3>
              <div className='list-notices'>
                {notice.map((item)=>{
                    return(
                      <div className='info-card' key={item.id}>
                        <span>{item.title}</span>
                        <p>{item.description}</p>
                        <button onClick={()=>handleDeleteItem(item)}>Excluir</button>
                      </div>
                    )
                  })
                }

              </div>
            </div>
          }

        </div>

      </div>
    </Container>
  )
};

export default Notices;