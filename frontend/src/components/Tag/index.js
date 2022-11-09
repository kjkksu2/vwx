import React, { useEffect, useReducer, useState } from "react";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";
import { fieldState, genderState } from "../../recoil";
import { Block } from "../../styles";

const Tag = () => {
  const [field, setField] = useRecoilState(fieldState);
  const [gender, setGender] = useRecoilState(genderState);

  return (
    <Block>
      <span>태그</span>
      <>
        {field && gender ? (
          <p>
            {field}
            {", "}
            {gender}
          </p>
        ) : (
          <p>본문 참조</p>
        )}
      </>
    </Block>
  );
};

export default Tag;
