import React from "react";
import { Container } from "./styels";

const Info = () => {
  return (
    <Container>
      <span className="category">공고/화보</span>
      <div>
        <div className="writer">
          <span>작성자</span>
          <span>김채은</span>
        </div>
        <div className="createdAt">
          <span>게시일</span>
          <span>2022.12.25</span>
        </div>
      </div>
    </Container>
  );
};

export default Info;
