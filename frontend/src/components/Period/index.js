import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useExtractFromRegex from "../../hooks/useExtractFromRegex";
import useRegex from "../../hooks/useRegex";

const Period = ({ text }) => {
  const periodLists = useRegex("period");
  const period = useExtractFromRegex(periodLists, text);

  const [fastDate, setFastDate] = useState(null);

  useEffect(() => {
    let res = null;

    if (period && period[0].includes("년")) {
      res = period.map((v) => {
        const year = v.split("년")[0];
        const month = v.split("년")[1].trim().split("월")[0];
        const day = v
          .split("년")[1]
          .trim()
          .split("월")[1]
          .trim()
          .split("일")[0];

        return `${year}-${month}-${day}`;
      });
    } else {
      res = period;
    }

    if (res) {
      const date = res.reduce((prev, cur) => {
        return new Date(prev).getTime() <= new Date(cur).getTime() ? prev : cur;
      });

      setFastDate(date);
    }
  }, [period]);

  return <p>{fastDate !== null ? String(fastDate) : "본문 참조"}</p>;
};

Period.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Period;
