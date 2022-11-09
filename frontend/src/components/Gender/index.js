import React from "react";
import PropTypes from "prop-types";
import useExtractFromLists from "../../hooks/useExtractFromLists";
import useRegex from "../../hooks/useRegex";

const Gender = ({ text }) => {
  const genderLists = useRegex("gender");
  const gender = useExtractFromLists(genderLists, text);

  return <p>{gender || "본문 참조"}</p>;
};

Gender.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Gender;
