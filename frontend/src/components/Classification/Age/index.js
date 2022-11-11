import React from "react";
import PropTypes from "prop-types";
import usePattern from "../../../hooks/usePattern";
import useRegex from "../../../hooks/useRegex";

const Age = ({ text }) => {
  const ageLists = usePattern("age");
  const age = useRegex(ageLists, text);

  return <p>{age || "본문 참조"}</p>;
};

Age.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Age;
