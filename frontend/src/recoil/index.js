import { atom } from "recoil";

export const fieldState = atom({
  key: "field",
  default: [],
});

export const genderState = atom({
  key: "gender",
  default: "",
});
