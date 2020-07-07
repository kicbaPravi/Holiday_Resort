import React from "react";
import style from "../sass/_layout.module.scss";
import Container from "../components/Container";
import Banner from "../components/Banner";
import Services from "../components/Services";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import FeaturedRooms from "../components/FeaturedRooms";

export default function Home() {
  return (
    <Container>
      <Banner title="Luxurius Rooms" subtitle="Deluxe Rooms Starting At $299">
        <Link to="/Rooms" className={style.btnPrimary}>
          our Rooms
        </Link>
      </Banner>
      <Services></Services>
      <Title title="Featured Rooms"></Title>
      <FeaturedRooms></FeaturedRooms>
    </Container>
  );
}
