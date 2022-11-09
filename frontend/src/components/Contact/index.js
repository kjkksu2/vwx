import React from "react";
import PropTypes from "prop-types";
import useExtractFromLists from "../../hooks/useExtractFromLists";
import useRegex from "../../hooks/useRegex";

const Contact = ({ text }) => {
  const contactLists = useRegex("contact");
  const contact = useExtractFromLists(contactLists, text);

  return <p>{contact || "본문 참조"}</p>;
};

Contact.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Contact;
