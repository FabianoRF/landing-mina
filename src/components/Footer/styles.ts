import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: center;

  padding: 90px 0;
  background: rgba(9, 37, 70, 0.1);

  section {
    width: 100%;
    max-width: 1080px;
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

  @media (max-width: 980px) {
    padding: 30px 0;
    section {
      flex-direction: column;
      align-items: center;

      > div {
        align-items: center;
        & + div {
          margin-top: 45px;
        }
        span {
          & + span {
            margin-top: 15px;
          }
        }
      }
    }
  }
`;
