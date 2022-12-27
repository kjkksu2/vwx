import React from "react";
import PropTypes from "prop-types";
import usePattern from "../../../hooks/usePattern";
import useRegex from "../../../hooks/useRegex";

const Contact = ({ text }) => {
  const contactLists = usePattern("contact");
  const contact = useRegex(contactLists, text);

  return <p>{contact || "본문 참조"}</p>;
};

Contact.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Contact;
