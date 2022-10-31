import React from "react";
import PropTypes from "prop-types";

import useExtractFromRegex from "../../hooks/useExtractFromRegex";
import useRegex from "../../hooks/useRegex";

const Age = ({ text }) => {
  const ageLists = useRegex("age");
  const age = useExtractFromRegex(ageLists, text);

  return <p>{age || "본문 참조"}</p>;
};

Age.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Age;
