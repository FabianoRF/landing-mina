import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 5;
  width: 100%;
  top: 0px;
  height: 100%;
  margin-top: auto;

  background: #e6e9ec;
  padding: 30px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      color: #092546;
      width: 20px;
      height: 20px;

      cursor: pointer;

      &:hover {
        color: #033a7a;
      }
    }
  }

  > div {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    a {
      height: 50px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;

      max-width: 320px;

      & + a {
        margin-top: 15px;
      }
    }

    .btn-update {
      color: #474747;

      font-size: 14px;
      background: none;
      text-decoration: none;
      transition: 0.2s color;

      &:hover {
        color: #033a7a;
      }
    }

    .btn-acess {
      color: #fff;
      font-size: 14px;
      background: #092546;
      text-decoration: none;
      transition: 0.2s background-color;

      &:hover {
        background: #024390;
      }
    }
  }
`;
