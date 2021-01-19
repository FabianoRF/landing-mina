import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;

    color: rgba(0, 0, 0, 0.7);
  }

  .background-section {
    background: rgba(250, 70, 146, 0.1);
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.02);
    width: 100%;
    height: 540px;
    margin-bottom: 160px;

    > section {
      max-width: 1280px;
      flex: 1;
      margin: 0 auto;
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

  main {
    max-width: 1080px;
    display: flex;
    align-items: center;
    flex-direction: column;

    section + section {
      margin-top: 100px;
    }

    section {
      width: 100%;

      img {
        z-index: -2;
      }

      > div {
        h2 {
          font-size: 34px;
          line-height: 43px;
          color: #092546;
        }

        p {
          text-align: justify;
          color: rgba(45, 45, 45, 0.7);
        }
      }
    }

    .first-section {
      display: flex;
      justify-content: space-between;

      > div {
        position: relative;
        padding-left: 100px;
        padding-right: 100px;

        h2 {
          margin-right: -30px;
          margin-left: -30px;
          width: 470px;
          z-index: 1;
        }

        p {
          padding-top: 50px;

          font-size: 14px;
          line-height: 24px;
          text-align: justify;
          width: 560px;

          color: rgba(45, 45, 45, 0.7);
        }

        span {
          z-index: -1;
          position: absolute;
          width: 190px;
          height: 60px;
          left: -80px;
          top: -20px;

          background: #fa4692;
        }
      }
    }

    .second-section {
      display: flex;
      justify-content: space-between;
      flex-direction: row-reverse;

      > div {
        position: relative;
        padding-right: 100px;

        h2 {
          text-align: right;
          font-size: 34px;
          line-height: 43px;
          margin-left: auto;
          margin-right: -30px;
          width: 180px;

          color: #092546;
        }

        p {
          padding-top: 50px;
          font-size: 14px;
          line-height: 24px;
          text-align: justify;
          width: 560px;

          color: rgba(45, 45, 45, 0.7);
        }

        span {
          z-index: -1;
          position: absolute;
          width: 190px;
          height: 60px;
          right: -80px;
          left: auto;
          top: -20px;

          background: #fa4692;
        }
      }
    }

    .third-section {
      width: 100%;
      h2 {
        font-size: 34px;
        line-height: 43px;
        width: 180px;
        margin-bottom: 30px;

        color: #092546;
      }
      > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }

    .access-section {
      margin-bottom: 100px;

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

export const CardContainer = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 53px;
    height: 53px;

    background: rgba(250, 70, 146, 0.1);
    border-radius: 5px;
  }

  h3 {
    margin: 30px 0;
    font-size: 14px;
    line-height: 16px;

    color: #474747;
  }

  p {
    width: 256px;
  }
`;
