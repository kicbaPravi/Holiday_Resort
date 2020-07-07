import React, { Component } from "react";
import Container from "../components/Container";
import style from "../sass/_layout.module.scss";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import BckgrStyle from "./BckgrStyle";
import Banner from "./Banner";
import defaultImg from "../images/defaultBcg.jpeg";

export default class SingleRoom extends Component {
  state = {
    slug: this.props.match.params.slug
  };

  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    console.log(room);

    if (!room) {
      return (
        <Container>
          <>
            <div className={style.singleRoom_center}>
              <h1>NO SUCH ROOM COULD BE FOUND...</h1>
            </div>
            <div className={style.singleRoom_center}>
              <Link to="/rooms" className={style.singleRoom_goBack}>
                click here to go back
              </Link>
            </div>
          </>
        </Container>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;

    const [mainImg, ...otherImgs] = images;

    return (
      <Container>
        <BckgrStyle img={mainImg || defaultImg}>
          <Banner title={name} subtitle="room"></Banner>
        </BckgrStyle>
        <section className={style.singleRoom_Images_Container}>
          <div className={style.singleRoom_Images}>
            {otherImgs.map((item, index) => {
              return (
                <div className={style.item}>
                  <img key={index} src={item} alt={name} />
                </div>
              );
            })}
          </div>
          <div className={style.room_info_row}>
            <div className={style.details}>
              <h1>Details</h1>

              <h6>{description}</h6>
            </div>

            <div className={style.info}>
              <h1>Info</h1>

              <h6>Price: ${price}</h6>
              <h6>Size: ${size} SQFT</h6>
              <h6>
                Max Capacity:
                {capacity > 1 ? `   ${capacity} personas` : `for one person`}
              </h6>
              <h6>{pets ? "Pets allowed" : "No pets allowed"}</h6>
              <h6>{breakfast && "Free breakfast included"}</h6>
            </div>
          </div>

          {/* start of EXTRAS */}

          <div className={style.room_info_row}>
            <div className={style.extras}>
              <h1>Extras</h1>
              <ul>
                {extras.map((item, index) => {
                  return (
                    <li key={index}>
                      <h6>- {item}</h6>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* end of EXTRAS */}
        </section>
      </Container>
    );
  }
}
