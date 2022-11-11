import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Header = ({ text }) => {
  const [header, setHeader] = useState(null);

  useEffect(() => {
    setHeader(null);
  }, []);

  useEffect(() => {
    const textArray = text.split("\n");
    const regex = new RegExp(`[^\\s]+`, "g");

    for (let i = 0; i < textArray.length; i++) {
      if (textArray[i] !== "" && regex.test(textArray[i])) {
        return setHeader(String(textArray[i]).trim());
      }
    }
  }, [text]);

  return <h1>{header || "비어있는 헤더"}</h1>;
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
