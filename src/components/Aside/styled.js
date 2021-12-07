/* eslint-disable no-undef */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;

  .aside-desktop,.aside-mobile{
    display: flex;
    flex-direction: column;
    min-width: 220%;
    padding: 0 12px;
    min-height:100vh;
    background-color: #1B8EF2;

    .logo-desktop,.logo-mobile{
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
    .menu-desktop,.menu-mobile{
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

    .config-desktop,.config-mobile{
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
          position: absolute;
          margin-left:22px;


        }
        &:hover{
          
          a{
            display: inline-block;
          }
        }
      }
    }
  }

  .menu-hamburguer{
    display: none;
    font-size: 2.2rem;
  }

  .aside-mobile{
    display: none;
  }



  @media screen and (max-width: 1292px) {

    .aside-desktop{
      display: none;
    }
    .menu-hamburguer{
      display: block;
      cursor: pointer;
      position: absolute;
      top: 10px;
      left:10px;
      z-index:9999;
    }
    .aside-mobile{
      display: block;
      min-width: 220%;
      position: absolute;
      top: 0;
      left: 0;
      z-index:999;

      .menu-mobile{
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .config-mobile{
        margin-top:50px;
      }
    }
  }

  @media screen and (max-width: 330px) {

.aside-mobile{
  display: block;
  min-width: 220%;
  padding-left: 50px;

  .menu-mobile{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .config-mobile{
    margin-top:50px;
  }
}
}

`;
