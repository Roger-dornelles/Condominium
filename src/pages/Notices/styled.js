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
    }
  }

`;