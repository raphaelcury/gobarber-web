import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 250px;
  text-align: center;

  form {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    span {
      color: #f08080;
      margin-bottom: 10px;
      align-self: flex-start;
    }

    input {
      background: rgba(0, 0, 0, 0.1);
      height: 44px;
      width: 100%;
      width: 250px;
      border-radius: 4px;
      border: 0;
      padding: 0 15px;
      margin-bottom: 10px;

      color: #fff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button {
      width: 250px;
      height: 44px;
      border: 0;
      border-radius: 4px;
      background: #3b9eff;
      transition: 0.2s;

      color: #fff;
      font-size: 16px;
      font-weight: bold;

      &:hover {
        background: ${darken(0.05, '#3b9eff')};
      }
    }

    a {
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      color: #fff;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
