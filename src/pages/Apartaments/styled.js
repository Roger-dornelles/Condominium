import styled from 'styled-components';

export const Container = styled.div`
  height:100vh;
  background-color:#dcdcdc;
  display: flex;

  .modal{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.7);

    .modal-description{
      width: 30%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding:20px 15px;
      border-radius:12px;
      background-color: #dcdcdc;
      position: absolute;

      .warning,.success{
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: center;
        background-color:yellow;
        padding: 3px 0;
        top: 0;
        left: 0;
      }
      .success {
        background-color:rgb(10,170,0);
        color:#fff;
      }

      form{
        width: 80%;
        display: flex;
        justify-content:center;
        align-items:center;
        flex-direction: column;
        text-align: center;
        font-size:1.1rem;

        label {
          width: 100%;
          margin-bottom: 12px;

          input {
            background-color: #dcdcdc;
            width: 99%;
            text-align: center;
            border: 0;
            border-bottom: 1px solid #fff;
            outline: none;
            font-size:1.1rem;
          }
        }
        .modal-buttons{
          margin-top: 10px;
          margin-bottom: 10px;
          width: 100%;
          display: flex;
          justify-content: space-around;

            button {
              width: 33%;
              border: 0;
              cursor: pointer;
              padding:3px 0;
              font-size:1.1rem;
              background-color:rgb(10,170,0);
              border-radius: 7px;
              color: #fff;
    
              &:hover{
                background-color:rgb(10,190,0);
              }
            }
            .btn-close{
              background-color:#FF365A;

              &:hover{
                background-color: #B32E46;
              }
            }

        }
      }
    }
  }

  .apartament{
    display: flex;
    flex: 1;
    align-items: center;
    flex-direction: column;
    overflow: auto;

    h2{
      margin-top:50px;
    }

    .button{
      width:48%;
      display: flex;
      justify-content: flex-start;
      
      button{
        padding:6px 15px;
        border: 0;
        outline: none;
        cursor: pointer;
        background-color: #1B8EF2;
        border-radius:7px;
        color: #FFF;
        font-size: 1rem;
      }

    }

    .description-apartament{
      display: flex;
      justify-content: center;
      align-items: center;
      width:60%;
      margin-top:40px;
      flex-direction: column;

      .description{
        width: 80%;
        display: flex;
        background-color:#fff;
        justify-content: space-between;
        text-align: center;
        margin-bottom: 10px;

        .description-item{
          width: 180px;
          text-align: center;
          display: flex;
          align-items: center;
          flex-direction: column;

        }
      }
    }
    
  }

`;