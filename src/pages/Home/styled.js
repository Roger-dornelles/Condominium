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
    }
  }
`;