import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body{
    max-width: 650px;
    width: 100%;
    margin: auto;
    background-color: #EEE;
    padding: 0 15px;
  }

  button{
    cursor: pointer;
  }
`;
