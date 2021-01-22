import styled, { css } from 'styled-components';

interface ContainerProps {
  isBackground: boolean;
}

export const Container = styled.header<ContainerProps>`
  display: flex;
  justify-content: center;
  padding: 25px 0;
  z-index: 2;

  ${props =>
    props.isBackground &&
    css`
      background: rgba(250, 70, 146, 0.1);
    `}

  > div {
    flex: 1;
    max-width: 1280px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .box-links {
      display: flex;
      height: 50px;

      a {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
      }

      .btn-update {
        color: #474747;
        font-size: 14px;
        width: 197px;
        height: 50px;
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
        width: 197px;
        height: 50px;
        background: #092546;
        text-decoration: none;
        transition: 0.2s background-color;

        &:hover {
          background: #024390;
        }
      }
    }
  }

  @media (max-width: 980px) {
    padding: 30px;
    > div {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-areas: 'a b c';
      justify-content: center;

      > a {
        grid-area: b;
        display: flex;
        justify-content: center;
      }

      svg {
        grid-area: c;
        color: #092546;
        height: 30px;
        width: 30px;
        margin-left: auto;

        cursor: pointer;

        &:hover {
          color: #033a7a;
        }
      }
    }
  }
`;
