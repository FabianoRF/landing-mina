import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;

  .background-section {
    background: rgba(250, 70, 146, 0.1);
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.02);
    width: 100%;
    height: 660px;

    section {
      max-width: 1280px;
      flex: 1;
      padding: 20px;
      padding-left: 133px;

      display: grid;
      grid-template-rows: 1.5fr 1fr;
      grid-template-columns: 528px 1fr;
      grid-template-areas:
        'title image'
        'input image';

      .titles-container {
        grid-area: title;
        margin-top: auto;
        h1 {
          font-size: 54px;
          font-weight: 600;
          color: #092546;
          letter-spacing: 0.396px;
        }
        p {
          font-size: 14px;
        }
      }

      .input-container {
        grid-area: input;
        margin-top: 30px;
      }

      .img-container {
        grid-area: image;
        display: flex;
        justify-content: flex-end;

        img {
          margin-right: 20px;
        }
      }
    }
  }
`;
