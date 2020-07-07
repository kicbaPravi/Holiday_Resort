import React from "react";
import { RoomConsumer } from "../Context";
import Room from "../components/Room";
import style from "../sass/_layout.module.scss";

export default function RoomsList() {
  return (
    <RoomConsumer>
      {value => {
        const { sortedRooms } = value;

        if (sortedRooms.length === 0) {
          return (
            <div>Unfortunately No Rooms Matched Your Search Parametars</div>
          );
        }

        return (
          <div className={style.allRooms}>
            {sortedRooms.map((room, id) => {
              return <Room key={id} room={room} />;
            })}
          </div>
        );
      }}
    </RoomConsumer>
  );
}
