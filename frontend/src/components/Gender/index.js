import React from "react";
import useExtractFromLists from "../../hooks/useExtractFromLists";
import useLists from "../../hooks/useLists";

const Gender = () => {
  const genderLists = useLists("gender");
  const gender = useExtractFromLists(genderLists);

  return <p>{gender || "본문 참조"}</p>;
};

export default Gender;
