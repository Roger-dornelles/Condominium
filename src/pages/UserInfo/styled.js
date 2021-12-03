import styled from 'styled-components';

export const UserPage = styled.div`
  width: 100%;
  height: 100vh;
  background-color:#CCCC;
  display: flex;
  align-items: center;
  flex-direction: column;

  h2{
    margin-top:30px;
  }

  a{
    font-size: 1.2rem;
    color: rgb(255,0,0);
  }
  
  .info-user{
    width: 27%;
    background-color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:10px;
    padding:30px 0;
    margin-top:50px;
    margin-bottom:70px;
  
    .info-container{
      display: flex;
      width: 100%;
      justify-content: center;
      flex-wrap: wrap;

      .info{
        display: flex;
        line-height:0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
      }
    }
    .info-button{
      display: flex;
      align-items: center;
      margin-right: 35px;
      
      button{
        width: 5rem;
        height:2rem;
        border: none;
        cursor: pointer;
        font-size: 1rem;
        border-radius: 5px;
        background-color: rgb(10,205,40);
        color: #FFF;

        &:hover{
          background-color: rgb(0,235,40);
        }
      }
    }

    .edit-container{
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      form{
        display:flex;
        flex-direction: column;
        width: 90%;
        font-size: 1.2rem;

        label{
          width: 100%;

          input{
            width: 98%;
            border: 0;
            outline: 0;
            border-bottom: 1px solid #CCC;
            margin-bottom:15px;
            text-align: center;
            font-size: 1rem;

            &:focus{
              border-bottom: 1px solid #000;
            }
          }
        }

        .buttons{
          display: flex;
          justify-content: space-around;
          width: 100%;
          margin-top:30px;
          flex-wrap: wrap;

          button{
            width: 40%;
            font-size:1rem;
            border: 0;
            padding:7px 0;
            cursor:pointer;
            border-radius: 5px;

            &:hover{
              background-color: #CCCC;
            }
          }

          button[type=submit]{
            background-color: rgb(10,205,40);

            &:hover{
              background-color: rgb(10,235,40);
            }
          }
        }
      }
    }
  }


`;