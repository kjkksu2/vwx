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
