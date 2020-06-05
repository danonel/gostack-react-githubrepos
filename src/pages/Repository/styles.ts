import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;

    display: flex;
    align-items: center;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #a2a2a2;
    }
  }
`

export const RepositoryInfo = styled.section`
  margin-top: 60px;

  header{
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
      width: 125px;
      height: 125px;
      border-radius: 50%;
      margin-bottom: 5px;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p{
        font-size: 18px;
        color: #737380;
        margin-top: 5px;
      }
    }
  }


  ul{
    display: flex;
    list-style: none;
    margin-top: 40px;


  }

  li {

    & + li {
      margin-left: 80px;
    }
    strong{
      display: block;
      font-size: 36px;
      color: #3d3d4d;
    }

    span {
      display: block;
      margin-top: 5px;
      color: #6c6c80;
    }
  }

`

export const Issues = styled.div`
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


  div {
    margin: 0 15px;
    flex: 1;

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
