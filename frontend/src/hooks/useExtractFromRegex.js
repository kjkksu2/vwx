import { useState, useEffect } from "react";

const useExtractFromRegex = (targetLists, text) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    setValue(null);
  }, [text]);

  useEffect(() => {
    for (const v of targetLists) {
      const regex = new RegExp(v, "g");

      if (regex.test(text)) {
        return setValue(text.match(regex));
      }
    }
  }, [targetLists, text]);

  return value;
};

export default useExtractFromRegex;
