import { useState, useEffect } from "react";

const useExtractFromRegex = (targetLists) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const textArray = Array.from(document.querySelectorAll(".original")).map(
      (v) => v.innerText
    );
    const paragraph = textArray.join("");

    for (const v of targetLists) {
      const regex = new RegExp(v, "g");

      if (regex.test(paragraph)) {
        return setValue(paragraph.match(regex));
      }
    }
  }, [targetLists]);

  return value;
};

export default useExtractFromRegex;
