import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  li{
    list-style: none;
  }
`;

export const Container = styled.div`
  background-color: white;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  textarea {
    padding: 10px;
    width: 50%;
    height: 300px;
    resize: none;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    textarea {
      font-size: 20px;
      font-weight: 500;
      padding: 10px;
      width: 70%;
      height: 500px;
      resize: none;
    }

    button {
      width: 70%;
      border: none;
      background-color: #0984e3;
      color: white;
      font-size: 20px;
      cursor: pointer;
      padding: 5px 0%;
      border-radius: 3px;
    }
  }
`;

export const Block = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  span {
    width: 20%;
    color: rgba(59, 60, 68, 0.8);
    font-size: 20px;
    font-weight: 700;
  }

  p {
    width: 80%;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    color: #000;
    font-size: 20px;
    font-weight: 400;
    padding: 12px 0;
    padding-left: 5px;
  }
`;

export const Box = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  padding: 0 10px;
  padding-bottom: 25px;
  margin-bottom: 50px;
`;
