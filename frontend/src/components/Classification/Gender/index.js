import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";
import usePattern from "../../../hooks/usePattern";
import useRegex from "../../../hooks/useRegex";
import { genderState } from "../../../recoil";

const Gender = ({ text }) => {
  const genderLists = usePattern("gender");
  const gender = useRegex(genderLists, text);
  const [value, setValue] = useRecoilState(genderState);

  useEffect(() => {
    setValue(gender);
  }, [gender]);

  return <p>{gender || "본문 참조"}</p>;
};

Gender.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Gender;
