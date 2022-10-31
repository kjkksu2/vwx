import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Qualification = ({ text }) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const modifiedText = text.split("\n");

    for (let i = 0; i < modifiedText.length; i++) {
      if (modifiedText[i].includes("자격")) {
        let size = i + 1;

        while (true) {
          if (modifiedText[size] !== "\r") {
            return setValue(modifiedText[size]);
          }
          size += 1;
        }
      }
    }
  }, [text]);

  return <p>{value || "본문 참조"}</p>;
};

Qualification.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Qualification;
