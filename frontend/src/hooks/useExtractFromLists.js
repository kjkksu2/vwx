import { useState, useEffect } from "react";

const useExtractFromLists = (targetLists, text) => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    for (const v of targetLists) {
      const regex = new RegExp(v, "g");

      if (regex.test(text)) {
        setArr((prev) => [...prev, ...new Set(text.match(regex))]);
      }
    }
  }, [targetLists, text]);

  return arr.join(", ");
};

export default useExtractFromLists;
