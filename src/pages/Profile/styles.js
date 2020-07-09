import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    margin: 30px 0px 10px;
    display: flex;
    flex-direction: column;

    input {
      background: rgba(0, 0, 0, 0.1);
      height: 44px;
      width: 100%;
      border-radius: 4px;
      border: 0;
      padding: 0 15px;
      margin-bottom: 10px;

      color: #fff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #f08080;
      margin-bottom: 10px;
      align-self: flex-start;
    }

    hr {
      border: 0;
      height: 2px;
      background: rgba(255, 255, 255, 0.2);
      margin-bottom: 10px;
    }

    button {
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

  button {
    height: 44px;
    width: 100%;
    border: 0;
    border-radius: 4px;
    background: #f08080;
    transition: 0.2s;

    color: #fff;
    font-size: 16px;
    font-weight: bold;

    &:hover {
      background: ${darken(0.05, '#f08080')};
    }
  }
`;
