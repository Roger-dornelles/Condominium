import styled from 'styled-components';

export const Container = styled.div`
  height:100vh;
  background-color:#dcdcdc;
  display: flex;

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