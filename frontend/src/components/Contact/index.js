import React from "react";
import useExtractFromLists from "../../hooks/useExtractFromLists";
import useLists from "../../hooks/useLists";

const Contact = () => {
  const contactLists = useLists("contact");
  const contact = useExtractFromLists(contactLists);

  return <p>{contact || "본문 참조"}</p>;
};

export default Contact;
