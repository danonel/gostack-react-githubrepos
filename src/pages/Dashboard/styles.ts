import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}


export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 350px;
  line-height: 56px;

  margin-top: 60px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 715px;

  display: flex;

  input {
    flex: 1;
    height: 78px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #a3a3a3;
    border: 2px solid #fff;
    border-right: 0;

    ${(props)=> props.hasError && css `
      border-color: #c53030;
    `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 200px;
    height: 78px;
    background: #04d361;
    border-radius: 0 5px 5px 0px;
    color: #fff;
    border: 0;
    font-weight: bolder;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 60px;
  max-width: 715px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 25px;
    display: block;
    text-decoration: none;
    transition: transform 0.3s;

    display: flex;
    align-items: center;

    & + a {
      margin-top: 10px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 15px;
      flex: 1

      strong {
        font-size: 16px;
        color: #3d3d4d;
      }
      p {
        font: 16px Roboto, sans-serif;
        color: #a8a8d3;
        margin-top: 5px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Error = styled.span`
  display: block;
  margin-top: 8px;
  color: #c53030;
`
