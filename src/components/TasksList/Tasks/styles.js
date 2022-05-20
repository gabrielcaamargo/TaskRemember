import styled from 'styled-components';

export const TaskBody = styled.div`
  background-color: #ddd;
  margin-top: 24px;
  padding: 8px;
  border-radius: 8px;

  h2{
    font-size: 22px;
  }

  & + & {
    margin-top: 16px
  }
`;
