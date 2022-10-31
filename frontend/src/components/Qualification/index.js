import React, { useEffect, useState } from "react";

const Qualification = () => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const textArray = Array.from(document.querySelectorAll(".original")).map(
      (v) => v.innerText
    );

    for (let i = 0; i < textArray.length; i++) {
      if (textArray[i].includes("자격")) {
        return setValue(textArray[i + 1]);
      }
    }
  }, []);

  return <p>{value || "본문 참조"}</p>;
};

export default Qualification;
