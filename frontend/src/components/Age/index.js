import React from "react";
import useExtractFromRegex from "../../hooks/useExtractFromRegex";
import useRegex from "../../hooks/useRegex";

const Age = () => {
  const ageLists = useRegex("age");
  const age = useExtractFromRegex(ageLists);

  return <p>{age || "본문 참조"}</p>;
};

export default Age;
