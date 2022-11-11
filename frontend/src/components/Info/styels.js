import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  padding: 0 10px;
  padding-bottom: 25px;
  margin-bottom: 50px;

  .category {
    color: #000;
    font-size: 22px;
    font-weight: 500;
  }

  & > div {
    .writer,
    .createdAt {
      span {
        &:first-child {
          color: #999;
          font-size: 24px;
          font-weight: 500;
        }
        &:last-child {
          color: #000;
          font-size: 24px;
          font-weight: 500;
          margin-left: 15px;
        }
      }
    }

    .writer {
      span {
        &:last-child {
          position: relative;
          left: 20px;
        }
      }
    }

    .createdAt {
      span {
        &:last-child {
          font-weight: 400;
        }
      }
    }
  }
`;
