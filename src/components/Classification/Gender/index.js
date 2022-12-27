import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";
import usePattern from "../../../hooks/usePattern";
import useRegex from "../../../hooks/useRegex";
import { genderState } from "../../../recoil";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  display: flex;

  & > div {
    margin-right: 100px;
    white-space: nowrap;

    label {
      color: #000;
      font-size: 20px;
      font-weight: 500;
      margin-right: 20px;
    }

    input {
      &[type="radio"] {
        width: 1rem;
        height: 1rem;
      }
    }
  }
`;

const Gender = ({ text }) => {
  const genderLists = usePattern("gender");
  const gender = useRegex(genderLists, text);
  const [value, setValue] = useRecoilState(genderState);

  const maleRef = useRef();
  const femaleRef = useRef();
  const noneRef = useRef();

  useEffect(() => {
    setValue(gender);
    maleRef.current.checked = false;
    femaleRef.current.checked = false;
    noneRef.current.checked = false;
  }, [gender]);

  useEffect(() => {
    const maleRegex = new RegExp("(남성|남자|^남$)", "g");
    const femaleRegex = new RegExp("(여성|여자|^여$)", "g");

    const maleFlag = maleRegex.test(gender);
    const femaleFlag = femaleRegex.test(gender);

    if (maleFlag && femaleFlag) {
      noneRef.current.checked = true;
    } else if (maleFlag) {
      maleRef.current.checked = true;
    } else if (femaleFlag) {
      femaleRef.current.checked = true;
    } else {
      noneRef.current.checked = true;
    }
  }, [gender]);

  return (
    <Container>
      <div>
        <label htmlFor="male">남성</label>
        <input type="radio" id="male" ref={maleRef} />
      </div>
      <div>
        <label htmlFor="female">여성</label>
        <input type="radio" id="female" ref={femaleRef} />
      </div>
      <div>
        <label htmlFor="none">무관</label>
        <input type="radio" id="none" ref={noneRef} />
      </div>
    </Container>
  );
};

Gender.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Gender;
