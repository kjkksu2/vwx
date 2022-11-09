import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Url = ({ text }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue("");
  }, [text]);

  useEffect(() => {
    const modifiedText = text.split("\n");

    for (let i = 0; i < modifiedText.length; i++) {
      if (modifiedText[i].includes("http")) {
        const pattern = `(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})`;
        const regex = new RegExp(pattern, "g");

        if (regex.test(modifiedText[i])) {
          return setValue(text.match(regex));
        }
      }
    }
  }, [text]);

  return <p>{value || "본문 참조"}</p>;
};

Url.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Url;
