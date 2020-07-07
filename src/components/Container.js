import React from "react";
import style from "../sass/_layout.module.scss";
import Header from "./Header";

export default function Container({ children }) {
  return (
    <div className={style.container}>
      <Header></Header>
      {children}
    </div>
  );
}
