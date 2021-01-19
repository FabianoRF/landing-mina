import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;

  section {
    width: 100%;
    max-width: 1080px;

    padding: 60px 0;

    h1 {
      padding-bottom: 30px;
      font-size: 34px;
      font-weight: 600;
      color: #092546;
      letter-spacing: 0.396px;
    }

    div {
      p {
        font-weight: 300;
        font-size: 14px;
        line-height: 24px;

        color: rgba(0, 0, 0, 0.7);

        & + p {
          padding-top: 20px;
        }
      }

      img {
        padding: 20px;
        width: 170px;
        height: 150px;
      }
    }

    .access-section {
      h2 {
        font-size: 34px;
        line-height: 43px;
        width: 280px;
        margin-bottom: 30px;

        color: #092546;
      }

      > div {
        width: 100%;
        display: flex;
        justify-content: space-between;

        p {
          width: 500px;
          color: rgba(45, 45, 45, 0.7);
        }

        div {
          margin-left: auto;
        }
      }
    }
  }
`;
