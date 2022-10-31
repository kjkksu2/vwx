import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Age from "./components/Age";
import Contact from "./components/Contact";
import Field from "./components/Field";
import Gender from "./components/Gender";
import Period from "./components/Period";
import Qualification from "./components/Qualification";

const Container = styled.div`
  .block {
    display: flex;

    p {
      margin: 0;
      margin-left: 5px;
    }
  }
`;

const Original = styled.div``;

const Extraction = styled.div``;

const App = () => {
  // 모집 분야를 찾고 nextSibling 이용해서 해당 태그 다 가져오기
  // 개행으로 있을 수도 있고, 바로 뒤에 나올 수도 있음.

  /* 
    p를 기준으로 찾는다.
    regex로 모집기간, 모집절차 등을 찾으면
    해당 글자를 regex로 찾고, 그 이후에 나온 것들 전부 가져오는 방식
  */

  return (
    <Container>
      <h1>ONLINE AUDITION</h1>
      <div className="block">
        <span>모집분야: </span>
        <Field />
      </div>
      <div className="block">
        <span>모집기간: </span>
        <Period />
      </div>
      <div className="block">
        <span>모집연령: </span>
        <Age />
      </div>
      <div className="block">
        <span>모집성별: </span>
        <Gender />
      </div>
      <div className="block">
        <span>지원자격: </span>
        <Qualification />
      </div>
      <div className="block">
        <span>지원방법: </span>
        <Contact />
      </div>
      <Original>
        <p className="original">모집대상</p>
        <p className="original">
          2022년도 11월부터 창작집단 상상두목 제작공연에 참여 가능한 분(배우,
          연출부, 스태프 등으로 참여)
        </p>
        <p className="original">
          기타 극단에서 진행하는 다양한 사업에 적극적으로 참여할 의향이 있으신
          분
        </p>
        <p className="original">모집분야</p>
        <p className="original">배우/연출/극작/기획</p>
        <p className="original">모집인원</p>
        <p className="original">남녀 00명</p>
        <p className="original">자격요건</p>
        <p className="original">
          연극을 사랑하고, 상상두목과 함께 연극분야에서 활동을 지속할 분
        </p>
        <p className="original">※ 만 30세 이하</p>
        <p className="original">모집기간</p>
        <p className="original">2022.10.19</p>
        <p className="original">이메일</p>
      </Original>
    </Container>
  );
};

export default App;
