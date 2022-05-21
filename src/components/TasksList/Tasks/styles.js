import styled from 'styled-components';

export const TaskBody = styled.div`
  background-color: #ddd;
  margin-top: 24px;
  padding: 16px 8px;
  border-radius: 8px;
  color: #222;

  h2{
    font-size: 20px;

  }

  & + & {
    margin-top: 16px
  }
`;
