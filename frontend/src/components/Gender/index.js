import React from "react";
import PropTypes from "prop-types";
import usePattern from "../../hooks/usePattern";
import useRegex from "../../hooks/useRegex";

const Gender = ({ text }) => {
  const genderLists = usePattern("gender");
  const gender = useRegex(genderLists, text);

  return <p>{gender || "본문 참조"}</p>;
};

Gender.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Gender;
