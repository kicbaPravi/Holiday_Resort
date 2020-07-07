import React from "react";
import style from "../sass/_layout.module.scss";
import { Link } from "react-router-dom";

export default function Room({ room }) {
  const { name, slug, images, price } = room;

  return (
    <article className={style.article_container}>
      <div className={style.article}>
        <h1>{name}</h1>

        <img src={images[0]} alt="room_image"></img>
        <h2>${price}</h2>
        <p>per night</p>
      </div>
      <Link to={`/SingleRoom/${slug}`} className={style.center}></Link>
    </article>
  );
}
