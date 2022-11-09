import styled from "styled-components";

export const Container = styled.div`
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
    text-align: center;

    textarea {
      padding: 10px;
      width: 50%;
      height: 300px;
      resize: none;
    }
  }
`;

export const Block = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  span {
    width: 20%;
  }

  p {
    width: 80%;
    margin: 0;
    margin-left: 5px;
    border: 1px solid black;
    border-radius: 3px;
    padding: 7px 3px;
    display: flex;
    align-items: center;
  }
`;
