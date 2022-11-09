import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Tag = ({ text }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue("");
  }, [text]);

  useEffect(() => {
    const modifiedText = text.split("\n");
  }, [text]);

  return <p>{value || "본문 참조"}</p>;
};

Tag.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tag;
