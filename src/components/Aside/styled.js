/* eslint-disable no-undef */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 18%;

  aside{
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height:100vh;
    background-color: #1B8EF2;

    .logo{
      width: 100%;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      margin-top:5rem;
      font-size: 2.5rem;
      p{
        margin-right: 0.5rem;
        display: flex;
      }
      span{
        display: flex;
      }
    }
    .menu{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top:7rem;


      nav{
        display: flex;
        justify-content: center;
        flex-direction: column;
        

        a,button{
          text-decoration: none;
          font-size: 1.5rem;
          color: #fff;
          line-height: 2.5rem;


          &:hover{
            position: relative;
            color: #CCC;
            left: 0.3rem;
          }
        }
      }

      button{
        border:0;
        outline: 0;
        cursor: pointer;
        background-color: #1B8EF2;
        text-align: left;
      }
    }

    .config{
      display: flex;
      flex: 1;
      padding-bottom: 30px;
      margin-left: 30px;
      align-items: flex-end;

      b{
        font-size: 1.5rem;
        color: #fff;
        cursor: pointer;
        display: flex;

        a{
          display: none;
          margin-left:8px;
          font-size: 1rem;
          text-decoration: none;
          color: #fff;

        }
        &:hover{
          
          a{
            display: inline-block;
          }

        }


      }

    }

  }

`;
