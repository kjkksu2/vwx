import React from "react";
import PropTypes from "prop-types";
import useExtractFromLists from "../../hooks/useExtractFromLists";
import useLists from "../../hooks/useLists";

const Field = ({ text }) => {
  const fieldLists = useLists("field");
  const field = useExtractFromLists(fieldLists, text);

  return <p>{field || "본문 참조"}</p>;
};

Field.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Field;
