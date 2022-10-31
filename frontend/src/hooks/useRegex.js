import { useState, useEffect } from "react";

const useRegex = (category) => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    switch (category) {
      case "age":
        setArr([`\\d+ ~ \\d+`, `\\d+~\\d+`, `만\\d+세`, `만\\s\\d+세`]);
        break;
      case "period":
        setArr([
          `\\d{4}년 ([1-9]|0[1-9]|1[012])월 ([1-9]|0[1-9]|[12][0-9]|3[01])일`,
          `\\d{4}.([1-9]|0[1-9]|1[012]).(0[1-9]|[12][0-9]|3[01]|[1-9])`,
          `\\d{4}-([1-9]|0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01]|[1-9])`,
        ]);
        break;
      default:
        break;
    }
  }, []);

  return arr;
};

export default useRegex;
