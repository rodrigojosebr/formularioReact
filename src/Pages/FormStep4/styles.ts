import styled from 'styled-components';

export const Container = styled.div`
  p {
    font-size: 13px;
    color: #B8B8D4;
  }

  h1 {
    margin: 0;
    padding: 0;
    font-size: 26px;
  }

  hr {
    height: 1px;
    border: 0;
    background-color: #16195C;
    margin: 30px 0;
  }

  button {
    background-color: #25CD89;
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
    padding: 20px 40px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    margin-top: 30px;
  }

  .backButton {
    font-size: 16px;
    text-decoration: none;
    padding: 20px 40px;
    color: #B8B8D4;
    margin-right: 20px;
  };
`;

export const Infos = styled.div`
  display: block;
  width: 100%;
`;

export const Label = styled.p`
  margin: 0;
  padding: 0;
`;

export const Value = styled.h2`
  margin: 2px 5px 15px 10px;
  padding: 0;
`;
