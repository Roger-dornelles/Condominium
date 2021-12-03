import styled from 'styled-components';


export const HomePage = styled.div`
  display:flex;
  width: 100%;
  min-height:100vh;
  background-image: url('../../image/bghome.png') !important;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .container{
    width: 40%;
    margin: auto;
    margin-top:200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    

    h2{
      align-items: center;
    }

    .form-container{
      position: relative;
      color: white;
      width: 70%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      background-color: rgba(0,0,0,0.4);
      border-radius: 20px;
      margin-top: 50px;

      .warning, .error{
        position:absolute;
        top: 0;
        left: 0;
        padding: 3px 0;
        display: flex;
        justify-content:center;
        width: 100%;
        background-color:rgb(110,255,0);
        color: #000;
      }

      .error{
        background-color:rgb(255,0,0);
      }

      form{
        display: flex;
        width: 100%;
        text-align: center;
        flex-direction: column;
        align-items: center;

        label{
          width: 70%;
          margin-bottom: 30px;
          input{
            width: 100%;
            border: 0;
            border-bottom: 1px solid #fff;
            padding: 7px 0;
            background-color: rgba(0,0,0,0.0);
            outline: none;
            text-align: center;
            color: #fff;
            font-size: 16px;
          }
          button{
            width: 50%;
            border: 0;
            padding:7px ;
            font-size: 16px;
            color: #fff;
            cursor: pointer;
            background-color:#1B8EF2;
            border-radius:7px;
            &:hover{
              background-color: #1BA0F2;
            }
          }
        }
      }

      button {
        cursor: pointer;
        border: 0;
        background-color: rgba(0,0,0,0.0);
        color: #FFF;
      }
    }

    .container-newUser {
      width: 70%;
      background-color: rgba(0,0,0,0.6);
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius:10px;
      padding:30px 15px;
      color: #fff;
      text-align: center;
      position: relative;

      .warning,.error{
        width: 100%;
        background-color:yellow;
        color: #000;
        padding:3px 0;
        position: absolute;
        top: 0;
        left: 0;
      }

      .error{
        background-color:rgb(255,0,0);
      }

      form{
        width: 100%;
        display: flex;
        flex-direction: column;

        label{
          width: 100%;
          margin-bottom:12px;

          input{
            width: 99%;
            background-color: rgba(0,0,0,0);
            border: 0;
            border-bottom: 1px solid #FFF;
            outline: none;
            text-align: center;
            color: #fff;
            font-size: 1rem;
            margin-bottom:12px;
            
          }
        }
      }
      .buttons-newUser{
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin-top: 20px;

        button{
          width: 30%;
          border: 0;
          cursor: pointer;
          padding:5px 0;
          border-radius:5px;
          font-size: 1rem;


          &:hover{
            background-color:#cccc;
          }
        }
        button[type=submit]{
          background-color:rgb(110,255,0);

          &:hover{
            background-color: rgb(110,215,0);
          }
        }
      }
    }
  }
`;