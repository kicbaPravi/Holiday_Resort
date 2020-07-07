import React, { Component } from "react";
import style from "../sass/_layout.module.scss";

export default class Services extends Component {
  state = {
    services: [
      {
        //   icon: <FaCocktail />,
        title: "free cocktails",
        info:
          " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, tempore!"
      },
      {
        //   icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, tempore!"
      },
      {
        //   icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, tempore!"
      },
      {
        //   icon: <FaBeer />,
        title: "Strongest beer ",
        info:
          " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, tempore!"
      }
    ]
  };
  render() {
    return (
      <section className={style.services}>
        {this.state.services.map((product, index) => {
          return (
            <article key={index}>
              <h2>{product.title}</h2>
              <p>{product.info}</p>
            </article>
          );
        })}
      </section>
    );
  }
}
