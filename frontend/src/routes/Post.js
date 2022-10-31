import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Classification from "../components/Classification";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  textarea {
    padding: 10px;
    width: 50%;
    height: 300px;
    resize: none;
  }
`;

const Post = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    (async function () {
      const res = await axios.get("/post");
      setText(res.data);
    })();
  }, []);

  return (
    <Container>
      <h1>ONLINE AUDITION</h1>
      <Classification text={text} />
      <textarea defaultValue={text} readOnly />
    </Container>
  );
};

export default Post;
