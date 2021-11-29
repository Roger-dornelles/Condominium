import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  background-color:#dcdcdc;
  
  .modal{
    width:100%;
    height:100vh;
    position:absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top:0;
    right:0;
    background-color: rgba(0,0,0,0.8);

    .modalAdd{
      width: 570px;
      display: flex;
      justify-content:center;
      align-items:center;
      flex-direction: column;
      background-color: #fff;
      border-radius:10px;
      padding:20px 10px;
      position: relative;

      p{
        display: flex;
        justify-content: center;
        width:100%;
        padding:3px 0;
        position: absolute;
        top: 0;
        left: 0;
        background-color: yellow;
      }
  
      form{
        width: 70%;
        display: flex;
        align-items: center;
        flex-direction:column;

        
        label{
          margin-bottom: 10px;
          width: 80%;
          
          textarea{
            width:100%;
            height:110px;
            resize: none;
            outline: none;
            font-size:16px;
            margin-top:7px;
            border: 1px solid #CCCC;

            &:focus{
              border: 1px solid #000;
            }
          }

          select{
            width: 30%;
            outline: none;
            padding: 4px 0;
            margin: 15px 0;
            margin-left: 12px;

            option{
              font-size: 1rem;;
            }
          }

        }
        .buttons-btn{
          width:100%;
          display: flex;
          justify-content:space-around;
          margin-top:10px;
          margin-bottom:20px;

          button{
            width:40%;
            font-size:1rem;
            border-radius:5px;
            padding:5px 4px;
            border: 0;
            cursor: pointer;

            &:hover{
              box-shadow: 0px 0px 3px 1px #CCCC;
            }
          }

          button[type=submit]{
            background-color: rgb(0,200,0);

            &:hover{
              background-color: rgb(0,235,0);
            }
          }
        }
      }
    }
  
  }
  
  .description{
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    padding-bottom: 30px;
    padding-top: 80px;
    font-size:1rem;
    overflow: auto;

    .buttons{
      display: flex;
      justify-content: space-between;
      width: 40%;

      button{
        margin-right: 12px;
        cursor: pointer;
        border: 0;
        outline: 0;
        padding:5px 15px;
        background-color: #1B8EF2;
        border-radius:7px;
        color: #FFF;
        font-size: 1rem;

        &:hover{
          background-color: #1B6EF7;
        }

      }
    }

    
    .description-complaints{
      width: 60%;
      display: flex;
      justify-content: center;
      margin-top:50px;
      flex-wrap: wrap;

      .complaint{
        width: 250px;
        min-height:230px;
        display: flex;
        align-items: center;
        border-radius:10px;
        flex-direction: column;
        background-color:#fff;
        padding:10px;
        margin: 10px ;

        img{
          text-align: center;
          width: 80%;
          height:90px;
          border:1px solid #ccc;
        }

        .description-items{
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          span{
            text-align: center;
            width: 100%;
            display: flex;
            flex-direction: column;
            margin: 5px 0;
          }

          button{
            margin-right: 12px;
            cursor: pointer;
            border: 0;
            outline: 0;
            padding:5px 15px;
            background-color: #1B8EF2;
            border-radius:7px;
            color: #FFF;
            font-size: 1rem;

            &:hover{
              background-color: #1B6EF7;
            }

          }
        }
      }

      .modalAdd{
      width: 570px;
      display: flex;
      justify-content:center;
      align-items:center;
      flex-direction: column;
      background-color: #fff;
      border-radius:10px;
      padding:20px 10px;
      position: relative;

      p{
        display: flex;
        justify-content: center;
        width:100%;
        padding:3px 0;
        position: absolute;
        top: 0;
        left: 0;
        background-color: yellow;
      }
  
      form{
        width: 70%;
        display: flex;
        align-items: center;
        flex-direction:column;

        
        label{
          margin-bottom: 10px;
          width: 80%;
          
          textarea{
            width:100%;
            height:110px;
            resize: none;
            outline: none;
            font-size:16px;
            margin-top:7px;
            border: 1px solid #CCCC;

            &:focus{
              border: 1px solid #000;
            }
          }

        }
        .buttons-btn{
          width:100%;
          display: flex;
          justify-content:space-around;
          margin-top:10px;

          button{
            width:40%;
            font-size:1rem;
            border-radius:5px;
            padding:5px 4px;
            border: 0;
            cursor: pointer;

            &:hover{
              box-shadow: 0px 0px 3px 1px #CCCC;
            }
          }

          button[type=submit]{
            background-color: rgb(0,200,0);

            &:hover{
              background-color: rgb(0,235,0);
            }
          }
        }
      }
    }
    }
  }

`;