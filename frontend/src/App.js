import React, { useCallback, useEffect, useState } from "react";
import Classification from "./components/Classification";
import Tag from "./components/Tag";
import Url from "./components/Url";
import { Container } from "./styles";

const App = () => {
  const [header, setHeader] = useState("비어있는 헤더");
  const [value, setValue] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    if (value) {
      setHeader(value.split("\n")[0]);
    }
  }, [value]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setText(value);
    },
    [value]
  );

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <Container>
      <h1>{header}</h1>
      <Classification text={text} />
      <form onSubmit={onSubmit}>
        <textarea onChange={onChange}></textarea>
        <button type="submit">추출</button>
      </form>
      <Url text={text} />
      <Tag text={text} />
      <span>태그: 모집분야, 모집성별</span>
    </Container>
  );
};

export default App;
