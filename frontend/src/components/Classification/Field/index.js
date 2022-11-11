import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";
import usePattern from "../../../hooks/usePattern";
import useRegex from "../../../hooks/useRegex";
import { fieldState } from "../../../recoil";

const Field = ({ text }) => {
  const fieldLists = usePattern("field");
  const field = useRegex(fieldLists, text);
  const [value, setValue] = useRecoilState(fieldState);

  useEffect(() => {
    setValue([field]);
  }, [field]);

  return <p>{field || "본문 참조"}</p>;
};

Field.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Field;
