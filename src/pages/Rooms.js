import React, { Component } from "react";
import Container from "../components/Container";
import { RoomContext } from "../Context";
import RoomsFilter from "../components/RoomsFilter";
import RoomsList from "../components/RoomsList";

export default class Rooms extends Component {
  static contextType = RoomContext;

  render() {
    return (
      <div>
        <Container>
          <RoomsFilter></RoomsFilter>
          <RoomsList></RoomsList>
        </Container>
      </div>
    );
  }
}
