import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  background-color:#dcdcdc;

  .container{
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    margin-left:250px;

    h2{
      margin-top:50px;
    }

    .buttons-meetings{
      width:55%;
      display: flex;
      justify-content: space-around;
      margin-bottom: 12px;
      flex-wrap: wrap;

      button{
        flex-wrap: wrap;
        margin: 12px;
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
    
    .container-meetings{
      width: 60%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 50px;

      .meetings-descriptions{
        width: 220px;
        min-height:300px;
        display: flex;
        flex-direction: column;
        background-color:#FFF;
        margin: 15px 12px;
        text-align: center;
        justify-content: center;
        align-items: center;
        border-radius:12px;

        span{
          padding:10px 0px;
          width: 100%;
        }

        button{
          border-radius:7px;
          border: 0;
          padding:5px;
          font-size: 1rem;
          width: 90%;
          margin-bottom: 10px;
          cursor: pointer;
          background-color: #1B8EF2;
          color: #fff;

          &:hover{
            background-color:#1B5EF2;
          }
        }

      }

      .create-meeting{
        width:60%;
        margin:0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        margin-top:80px;
        border-radius:12px;
        background-color: #FFF;
        position: relative;
        
        .warning{
          width: 100%;
          text-align: center;
          padding:4px 0;
          background-color: rgb(255, 255, 10);
          position: absolute;
          top: 0;
          left: 0;

        }
        form{
          width:90%;
          display: flex;
          flex-direction: column;
          padding:10px;

          label{
            width: 100%;
            margin: 20px 0;
            
            input{
              display: flex;
              align-items: center;
              width: 98%;
              border: 0;
              border-bottom: 1px solid #CCC;
              outline: none;
              text-align: center;
              font-size: 1rem;

              &:focus{
                border-bottom: 2px solid #000;
              }
            }
          }

        }
      }

      .buttons-create-meeting{
        width:100%;
        display: flex;
        justify-content: space-around;
        margin-top: 30px;
        margin-bottom:20px;

        button{
          width: 40%;
          padding:  5px;
          font-size:1rem;
          cursor: pointer;
          border: 0;
          outline: none;
          border-radius:7px;
          &:hover{
            background-color: #CCCC;
          }
        }

        button[type=submit]{
              background-color:rgb(0,255,0);
              
          &:hover{
            background-color:rgb(0,240,0);
            color: #fff;
          }
        }
      }

      .modal{
        display:flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        background-color:rgba(0,0,0,0.5);
        position: absolute;
        top: 0;
        left: 0;

        .modal-description{
          width: 37%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          background-color:#FFF;
          padding:30px 15px;
          border-radius:15px;
          position: relative;

          .warning{
            background-color: rgb(255, 255, 10);
            display: flex;
            padding:5px 0;
            width: 100%;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 0;
            left: 0;
          }
          
          form{
            display: flex;
            width: 100%;
            text-align: center;
            justify-content: center;
            flex-direction: column;


            label{
              width: 100%;
              padding-bottom: 20px;
              display: flex;
              flex-direction: column;
              align-items: center;
              input{
                margin-bottom: 15px;
                width: 99%;
                border: 0;
                border-bottom: 1px solid #CCC;
                font-size: 1rem;
                text-align: center;
                outline: none;
                margin-top:7px;

                &:focus{
                  border-bottom: 1px solid #000;
                }
              }

              select{
                display: flex;
                flex-direction: column;
                width: 50%;
                justify-content: center;
                margin-bottom: 30px;
                
                option{
                  outline: none;
                  font-size: 1rem;
                  
                }
              }
            }

            .modal-buttons{
              display: flex;
              width: 80%;
              margin:0 auto;
              justify-content: space-around;
              
              button{
                display: flex;
                width: 43%;
                justify-content: center;
                cursor: pointer;
                border-radius:7px;
                border: 0;
                font-size: 1rem;
                padding: 5px 0;
                
              }
            }
          }
        }
      }

    }
  }

  @media screen and (max-width: 1280px ) {
    .container{
      width: 100%;
      margin-left: 0px;
      .buttons-meetings{
        width: 70%;

        button{
          margin: 12px;

        }
      }

      .container-meetings{
        width: 70%;
        justify-content: center;
        align-items: center;

        .meetings-description{
          width: 70%;
        }
      }
    }

  }

  @media screen and (max-width:950px){
    .container{
      width: 100%;
      .buttons-meetings{
        width: 60%;

        button{
          margin: 12px;
          margin-right: 0;
        }
      }

      .container-meetings{
        width: 100%;
        justify-content: center;

        .meetings-description{
          width: 100%;
        }

        .create-meeting{
          width: 95%;
        }

        .modal{
          width: 100%;
          .modal-description{
            width: 95%;
          }
        }
      }
    }
  }

  @media screen and (max-width:350px){
    .container{
      width: 100%;
      .buttons-meetings{
        width: 90%;

        button{
          margin: 12px;
          margin-right: 0;
        }
      }

    }
  }
`;