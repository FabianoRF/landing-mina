import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: center;

  padding: 90px 0;
  background: rgba(9, 37, 70, 0.1);

  section {
    width: 100%;
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
    align-items: initial;

    div {
      display: flex;
      flex-direction: column;

      img {
        margin-bottom: 20px;
      }

      span {
        font-size: 14px;
        color: #092546;
        cursor: pointer;

        & + span {
          margin-top: 30px;
        }

        &:hover {
          color: #033a7a;
        }
      }
    }
  }
`;
