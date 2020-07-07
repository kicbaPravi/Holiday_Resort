import React from "react";
import style from "../sass/_layout.module.scss";

export default function Banner({ children, title, subtitle }) {
  return (
    <div className={style.banner}>
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  );
}
