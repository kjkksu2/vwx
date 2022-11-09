import React from "react";
import PropTypes from "prop-types";
import usePattern from "../../hooks/usePattern";
import useRegex from "../../hooks/useRegex";

const Field = ({ text }) => {
  const fieldLists = usePattern("field");
  const field = useRegex(fieldLists, text);

  return <p>{field || "본문 참조"}</p>;
};

Field.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Field;
