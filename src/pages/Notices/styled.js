import styled from 'styled-components';

export const Container = styled.div`
  background-color:#dcdcdc;
  display: flex;
  flex-direction: row;
  height: 100vh;


  .notices{
    width: 100%;
    padding-bottom: 50px;
    display: flex;
    align-items: center;
    flex: 1;
    flex-direction: column;
    overflow: auto;

    h2{
      margin-top:70px;
    }

    .buttons-notices{

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

    .info{
      display: flex;
      width: 70%;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;

      .info-card{
        margin-top: 30px;
        width: 300px;
        min-height:200px;
        margin-left: 15px;
        padding: 5px 7px;
        text-align: center;
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: #fff;
        border-radius:10px;

        span{
          font-weight: bolder;
          font-size:1rem;
          margin-top:1.5rem;
        }
      }

      .noticeAll{
        width: 60%;
        display: flex;
        margin-top:70px;
        background-color: #fff;
        flex-direction: column;
        align-items: center;
        padding: 70px 15px;
        border-radius: 15px;
        position: relative;
        
        .warning,.success,.alert{
          width: 100%;
          padding: 5px 0;
          display: flex;
          justify-content:center;
          background-color: yellow;
          position: absolute;
          top: 0;
          left: 0;
        }

        .success{
          background-color:rgb(55, 245, 55);
        }

        .alert{
          background-color:rgb(175,10,10);
        }

        form{
          width: 60%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;


          label{
            width: 100%;
            margin-bottom: 20px;

            input{
              width: 100%;
              border: 0;
              outline: none;
              border-bottom: 1px solid #CCC;
              margin-bottom:15px;
              margin-top: 12px;
              font-size: 1rem;

              &:focus{
                border-bottom:1px solid #000;
              }
            }

            textarea{
              font-size: 1rem;
              width: 100%;
              resize: none;
              height: 120px;
              border: 1px solid #CCC;
              outline: none;
              margin-top: 12px;

              &:focus{
                border: 1px solid #000;
              }
            }
          }

          .buttons-noticeAll{
            width: 100%;
            display: flex;
            justify-content: space-around;

            button{
              width: 40%;
              padding:5px;
              border: none;
              cursor: pointer;
              font-size:1rem;
              border-radius: 5px;

              &:hover{
                background-color: #CCCC;
              }
            }

            button[type=submit]{
              background-color: rgb(55, 245, 55);

              &:hover{
                background-color: rgb(25, 220, 15);
                color: rgb(255, 255, 255);
              }
            }
          }
        }
      }

      .update-notices{
        width: 100%;
        margin-top:30px;
        display: flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;

        .list-notices{
          width:100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          .info-card{
            width:290px;
            min-height:200px;

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
      }

      .modal-description{
        width: 100%;
        height:100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .modal-item{
          background-color:#FFF;
          display: flex;
          width: 40%;
          align-items: center;
          flex-direction: column;
          border-radius:15px;
          position: absolute;

          .warning,.success{
          display: flex;
          width: 100%;
          position: absolute;
          justify-content: center;
          padding: 5px 0;
          background-color:yellow;
        }
        .success{
          background-color:rgb(55, 245, 55);
        }

        h3{
          margin-top: 30px;
        }
        form{
          width: 70%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding:30px 10px;

          label{
            width: 80%;
            margin-bottom: 15px;
            input{
              width: 100%;
              border: 0;
              outline: none;
              border-bottom: 1px solid #ccc;
              margin-bottom: 20px;
              font-size: 1rem;

              &:focus{
                border-bottom: 1px solid #000;
              }
            }

            textarea{
              width: 100%;
              height: 170px;
              border: 1px solid #ccc;
              font-size: 1rem;
              margin-top: 12px;
              outline: none;
              resize: none;

              &:focus{
                border: 1px solid #000;
              }

            }
          }
          .modal-buttons{
            display: flex;
            width: 100%;
            justify-content: space-around;
            margin:20px 0;

            button{
              width: 40%;
              cursor: pointer;
              border: 0;
              outline: 0;
              padding:5px 0;
              background-color: #CCC;
              border-radius:7px;
              font-size: 1rem;

              &:hover{
                background-color: #CCCC;
              }

            }

            button[type=submit]{
            background-color: rgb(55, 245, 55);

            &:hover{
              background-color: rgb(25, 220, 15);
              color: rgb(255, 255, 255);
            }
          }
          }
        }

        }
      }

      .delete-notice{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .list-notices{
          width: 100%;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          

          .info-card{
            width:290px;
            min-height:200px;

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
      }
    }
  }

`;