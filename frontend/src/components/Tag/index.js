import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { fieldState, genderState } from "../../recoil";
import { Block } from "../../styles";
import { List } from "./styles";

const Tag = () => {
  const [field, setField] = useRecoilState(fieldState);
  const [gender, setGender] = useRecoilState(genderState);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    if (field && gender) {
      setLists([...field[0].split(", "), ...gender.split(", ")]);
    }
  }, [field, gender]);

  return (
    <Block>
      <span>태그</span>
      <>
        {field && gender ? (
          <>
            {lists.map((v, i) => (
              <List key={i}>{v}</List>
            ))}
          </>
        ) : (
          <p>본문 참조</p>
        )}
      </>
    </Block>
  );
};

export default Tag;
