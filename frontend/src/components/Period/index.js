import React from "react";
import PropTypes from "prop-types";
import usePattern from "../../hooks/usePattern";
import useRegex from "../../hooks/useRegex";

const Period = ({ text }) => {
  const periodLists = usePattern("period");
  const period = useRegex(periodLists, text);

  return <p>{period || "본문 참조"}</p>;
};

Period.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Period;
