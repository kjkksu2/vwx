import React from "react";
import PropTypes from "prop-types";
import useExtractFromLists from "../../hooks/useExtractFromLists";
import useLists from "../../hooks/useLists";

const Gender = ({ text }) => {
  const genderLists = useLists("gender");
  const gender = useExtractFromLists(genderLists, text);

  return <p>{gender || "본문 참조"}</p>;
};

Gender.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Gender;
