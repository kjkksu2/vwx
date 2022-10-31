import { useState, useEffect } from "react";

const useExtractFromLists = (targetLists) => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const textArray = Array.from(document.querySelectorAll(".original")).map(
      (v) => v.innerText
    );
    const paragraph = textArray.join("");

    for (const v of targetLists) {
      const regex = new RegExp(v, "g");

      if (regex.test(paragraph)) {
        setArr((prev) => [...prev, v]);
      }
    }
  }, [targetLists]);

  return arr.join(", ");
};

export default useExtractFromLists;
