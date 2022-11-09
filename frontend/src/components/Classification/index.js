import React from "react";
import PropTypes from "prop-types";

import Age from "../Age";
import Contact from "../Contact";
import Field from "../Field";
import Gender from "../Gender";
import Period from "../Period";
import Qualification from "../Qualification";
import { Block } from "./styles";

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
