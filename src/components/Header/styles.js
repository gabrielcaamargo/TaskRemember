import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background: ${({ theme }) => theme.colors.blue.main};
  color: #FFF;
  width: 100%;
  margin-top: 24px;
  padding: 48px;
  border-radius: 8px;
  box-shadow: 1px 3px 4px rgba(0,0,0,0.4);
  line-height: 30px;

  h2{
    color: ${({ theme }) => theme.colors.blue.lighter};
    font-family: 'Inter', sans-serif;
  }

  p{
    font-weight: bold;
    font-family: 'Inter', sans-serif;
  }

  button{
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.colors.blue.light};
    color: #FFF;
    font-weight: bold;
    padding: 8px;
    border-radius: 4px;
    transition: background-color .15s ease-in;

   :hover{
      background-color: ${({ theme }) => theme.colors.blue.lighter};
    }

    :active{
      background-color: ${({ theme }) => theme.colors.blue.dark};
    }
  }

  input{
    border: 2.5px solid #e9e9e9;
    outline: none;
    padding: 6px;
    font-size: 16px;
    background-color: #e9e9e9;
    border-radius: 4px;
    transition: border-color .2s ease-in;

    ::placeholder{

    }

    :focus{
      border: 2.5px solid ${({ theme }) => theme.colors.blue.lighter};
    }
  }

  @media (max-width: 610px){
    flex-direction: column;
    justify-content: center;
    line-height: 64px;
    padding: 24px;
  }
`;
