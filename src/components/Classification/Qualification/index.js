import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Qualification = ({ text }) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    setValue(null);
  }, [text]);

  useEffect(() => {
    const textArray = text.split("\n");
    const regex = new RegExp("(지원자격|자격요건)", "g");

    for (let i = 0; i < textArray.length; i++) {
      if (regex.test(textArray[i])) {
        const res = textArray[i]
          .split(/(지원자격|자격요건)/g)[2]
          .split(/^[^0-9가-힣]+/g)[1];

        if (res) {
          // 찾은줄
          return setValue(res);
        } else {
          // 다음줄
          let size = i + 1;

          while (true) {
            if (textArray[size] !== "") {
              return setValue(textArray[size]);
            }
            size += 1;
          }
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
