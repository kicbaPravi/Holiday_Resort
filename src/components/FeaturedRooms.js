import React, { Component } from "react";
import { RoomContext } from "../Context";
import style from "../sass/_layout.module.scss";
import Room from "../components/Room";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { featuredRooms } = this.context;

    featuredRooms = featuredRooms.map(room => {
      return <Room key={room.id} room={room}></Room>;
    });

    return <div className={style.featuredRooms}>{featuredRooms}</div>;
  }
}
