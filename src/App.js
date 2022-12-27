import React, { useCallback, useState } from "react";
import { RecoilRoot } from "recoil";
import Classification from "./components/Classification";
import Header from "./components/Header";
import Info from "./components/Info";
import Tag from "./components/Tag";
import Url from "./components/Url";
import { GlobalStyle, Container, Box } from "./styles";

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
      <GlobalStyle />
      <div style={{ backgroundColor: "#4f6671", padding: "80px 0" }}>
        <div style={{ backgroundColor: "#fafafa", padding: "0 50px" }}>
          <Container>
            <Header text={text} />
            <Info />
            <Classification text={text} />
            <Box>
              <form onSubmit={onSubmit}>
                <textarea onChange={onChange}></textarea>
                <button type="submit">추출</button>
              </form>
            </Box>
            <Url text={text} />
            <Tag />
          </Container>
        </div>
      </div>
    </RecoilRoot>
  );
};

export default App;
