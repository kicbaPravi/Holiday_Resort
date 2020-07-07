import React from "react";
import style from "../sass/_layout.module.scss";

export default function Title({ title }) {
  return (
    <div className={style.title}>
      <h1>{title}</h1>
    </div>
  );
}
