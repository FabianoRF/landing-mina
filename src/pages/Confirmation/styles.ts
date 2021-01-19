import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;

  section {
    width: 100%;
    max-width: 1080px;

    padding: 80px 0;

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
  }
`;
