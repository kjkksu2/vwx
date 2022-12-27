import React from "react";
import PropTypes from "prop-types";
import usePattern from "../../hooks/usePattern";
import useRegex from "../../hooks/useRegex";
import { Block } from "../../styles";

const Url = ({ text }) => {
  const urlLists = usePattern("url");
  const url = useRegex(urlLists, text);

  return (
    <Block>
      <span>원본링크</span>
      <p>{url || "본문 참조"}</p>
    </Block>
  );
};

Url.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Url;
