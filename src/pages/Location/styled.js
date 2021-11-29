import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  background-color:#dcdcdc;
  
  .description{
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    flex-direction: column;
    overflow: auto;
    
    h2{
      margin-top:50px;
    }

    .buttons-location{
      width:40%;
      display: flex;
      justify-content: space-around;
      margin-bottom: 12px;

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

    .location-description{
      width:60%;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;

      .descriptions-items{
        display: flex;
        margin: 12px;
        justify-content: center;
        flex-direction: column;
        min-width:270px;
        min-height:250px;
        align-items: center;
        background-color: #fff;
        border-radius: 10px;
        padding: 10px 5px;

        span{
          display: flex;
          padding-bottom: 12px;
        }

        button{
          border-radius: 5px;
          padding: 7px 17px;
          cursor: pointer;
          border: 0;
          background-color:#1B8EF2;
          color: #fff;
          font-size:1rem;

          &:hover{
            background-color: #1B6EF7;
          }
        }
      }
    }

    .reservation{
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color:#fff;
      margin-top: 50px;
      border-radius:15px;
      position: relative;

      .warning{
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        text-align: center;
        background-color: rgb(255, 255, 100);
        padding: 4px 0;
      }

      form{
        width: 50%;
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 20px 15px;


        label{
          width: 100%;
          font-size:1.1rem;
          margin-bottom: 12px;

          input{
            font-size:1rem;
            width: 100%;
            border: 0;
            padding: 5px 0;
            outline: 0;
            border-bottom: 1px solid #CCC;
            text-align: center;
            margin-bottom: 12px;

            &:focus{
              border-bottom: 2px solid #000;
            }
            
          }
        }

        .buttons-form{
          width: 100%;
          margin-top: 20px;
          margin-bottom:20px;
          display: flex;
          align-items: center;
          justify-content: space-around;

          button{
            width: 30%;
            border: 0;
            outline: 0;
            cursor: pointer;
            padding:7px 15px;
            border-radius:7px;
            font-size:1rem;
          }
        }
      }
    }

    .modal{
      width:100%;
      height:100vh;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color:rgba(0,0,0,0.8);

      .modal-description{
        width:40%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color:#FFF;
        border-radius:12px;
        flex-direction: column;
        padding:50px 0px;
        position:relative;

        .warning{
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          text-align: center;
          background-color: rgb(255, 255, 100);
          padding: 4px 0;
        }
        form{
          width:50%;
          display: flex;
          justify-self: center;
          align-self: center;
          flex-direction: column;
          margin-bottom: 20px;
          font-size:1rem;


          label{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            input{
              width: 100%;
              border: 0;
              border-bottom: 1px solid #ccc;
              outline: none;
              text-align: center;
              margin: 15px 0;
              font-size:1rem;

              &:focus{
                border-bottom: 1px solid #000;
              }
            }
          }

          .modal-buttons{
            display: flex;
            margin-top:30px;
            justify-content: space-around;

            button{
              width: 40%;
              border: 0;
              padding: 4px 15px;
              cursor: pointer;
              border-radius: 5px;
              font-size: 1rem;

              &:hover{
                background-color:#dcdcdc;
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
        }
      }
    }
  }
`;