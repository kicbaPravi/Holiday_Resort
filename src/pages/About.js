import React from "react";
import style from "../sass/_layout.module.scss";
import Container from "../components/Container";
import imgBeach1 from "../images/beach1.jpg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <Container>
        <div className={style.content}>
          <div className={style.aboutUs}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis incidunt eaque qui numquam. Est eaque vel quisquam
              illum eos earum expedita inventore reprehenderit, tempore quas ea
              vero incidunt laborum cumque?Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Ipsum maxime magni vitae nulla
              aspernatur nesciunt consequatur reprehenderit totam reiciendis
              numquam nisi, doloremque tempora! Ex eum distinctio ducimus cum
              dolorum sit. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quas nemo qui, voluptate nostrum vitae ex quisquam nesciunt
              odio perspiciatis omnis quis hic sed cumque amet! Tempore
              voluptate facere excepturi amet?
            </p>
            <Link to="/" className={style.btnAbout}>
              Go To Home Page
            </Link>
          </div>
          <div className={style.aboutPicture}>
            <img src={imgBeach1} alt="" />
          </div>
        </div>
      </Container>
    </>
  );
}
