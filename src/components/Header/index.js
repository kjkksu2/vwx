import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container } from "./styles";

const Header = ({ text }) => {
  const [header, setHeader] = useState(null);

  useEffect(() => {
    setHeader(null);
  }, [text]);

  useEffect(() => {
    const textArray = text.split("\n");
    const regex = new RegExp(`[^\\s]+`, "g");

    for (let i = 0; i < textArray.length; i++) {
      if (textArray[i] !== "" && regex.test(textArray[i])) {
        return setHeader(String(textArray[i]).trim());
      }
    }
  }, [text]);

  return <Container>{header || "제목 없음"}</Container>;
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
