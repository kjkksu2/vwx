import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Age from "../Age";
import Contact from "../Contact";
import Field from "../Field";
import Gender from "../Gender";
import Period from "../Period";
import Qualification from "../Qualification";

const Block = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  span {
    width: 20%;
  }

  p {
    width: 80%;
    margin: 0;
    margin-left: 5px;
    border: 1px solid black;
    border-radius: 3px;
    padding: 7px 3px;
    display: flex;
    align-items: center;
  }
`;

const Classification = ({ text }) => {
  return (
    <>
      <Block>
        <span>모집분야</span>
        <Field text={text} />
      </Block>
      <Block>
        <span>모집기간</span>
        <Period text={text} />
      </Block>
      <Block>
        <span>모집연령</span>
        <Age text={text} />
      </Block>
      <Block>
        <span>모집성별</span>
        <Gender text={text} />
      </Block>
      <Block>
        <span>지원자격</span>
        <Qualification text={text} />
      </Block>
      <Block>
        <span>지원방법</span>
        <Contact text={text} />
      </Block>
    </>
  );
};

Classification.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Classification;
