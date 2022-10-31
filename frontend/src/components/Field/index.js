import React from "react";
import useExtractFromLists from "../../hooks/useExtractFromLists";
import useLists from "../../hooks/useLists";

const Field = () => {
  const fieldLists = useLists("field");
  const field = useExtractFromLists(fieldLists);

  return <p>{field || "본문 참조"}</p>;
};

export default Field;
