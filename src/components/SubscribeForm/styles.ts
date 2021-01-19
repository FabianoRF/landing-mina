import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: stretch;
  justify-content: flex-start;

  input {
    background: #ffffff;
    border: 1px solid #092546;
    box-sizing: border-box;
    border-radius: 4px;

    padding: 20px;
    width: 300px;
    height: 50px;
  }

  button {
    color: #fff;
    border: 0;
    outline: 0;
    font-size: 14px;
    border-radius: 4px;
    margin-left: 10px;

    width: 197px;
    height: 50px;
    background: #092546;
    text-decoration: none;
    transition: 0.2s background-color;

    &:hover {
      background: #024390;
    }
  }
`;
