import React, { useCallback, useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import Classification from "./components/Classification";
import Header from "./components/Header";
import Tag from "./components/Tag";
import Url from "./components/Url";
import { Container } from "./styles";

const App = () => {
  const [value, setValue] = useState("");
  const [text, setText] = useState("");

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
    <RecoilRoot>
      <Container>
        <Header text={text} />
        <Classification text={text} />
        <form onSubmit={onSubmit}>
          <textarea onChange={onChange}></textarea>
          <button type="submit">추출</button>
        </form>
        <Url text={text} />
        <Tag />
      </Container>
    </RecoilRoot>
  );
};

export default App;
