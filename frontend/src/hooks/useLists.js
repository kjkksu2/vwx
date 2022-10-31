import { useState, useEffect } from "react";

const useLists = (category) => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    switch (category) {
      case "field":
        setArr(["배우", "연출", "극작", "기획", "보컬", "랩", "댄스", "연기"]);
        break;
      case "gender":
        setArr(["남성", "여성", "남자", "여자", "모두", "남녀"]);
        break;
      case "contact":
        setArr(["이메일", "탤런티드"]);
        break;
      default:
        break;
    }
  }, []);

  return arr;
};

export default useLists;
