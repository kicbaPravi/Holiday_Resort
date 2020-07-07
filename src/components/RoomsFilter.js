import React, { Component } from "react";
import style from "../sass/_layout.module.scss";
import { RoomContext } from "../Context";

export default class RoomsFilter extends Component {
  static contextType = RoomContext;

  render() {
    const {
      handleChange,
      rooms,
      type,
      price,
      minPrice,
      maxPrice,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.context;

    // getting unique values

    const getUnique = (items, value) => {
      return [...new Set(items.map((item) => item[value]))];
    };

    // Unique Room Type

    let roomType = getUnique(rooms, "type");
    roomType = ["all", ...roomType];

    roomType = roomType.map((type, index) => {
      return (
        <option value={type} key={index}>
          {type}
        </option>
      );
    });

    // Unique Guest type

    let guests = getUnique(rooms, "capacity");

    guests = guests.map((num, id) => {
      return (
        <option value={num} key={id}>
          {num}
        </option>
      );
    });

    // END of getting unique values

    return (
      <div className={style.filterBox}>
        {/* ******* FIRST SELECT TYPE ******* */}
        <div>
          <form>
            <p>Room type</p>
            <select name="type" id="type" value={type} onChange={handleChange}>
              {roomType}
            </select>
          </form>
        </div>

        {/* ******* END of FIRST SELECT TYPE ******* */}

        {/* ******* SELECT GUEST TYPE ******* */}

        <div>
          <form>
            <p>Guests</p>
            <select name="capacity" id="capacity" onChange={handleChange}>
              {guests}
            </select>
          </form>
        </div>

        {/* ******* END of SELECT GUEST TYPE ******* */}

        {/* ******* SLIDER PRICE ******* */}
        <div>
          <form>
            <p>Room price ${price}</p>
            <input
              type="range"
              name="price"
              id="price"
              min={minPrice}
              max={maxPrice}
              value={price}
              onChange={handleChange}
              style={{ width: "50%" }}
            />
          </form>
        </div>

        {/* ******* END of SLIDER PRICE ******* */}

        {/* ******* INPUT PRICE ******* */}

        <div>
          <form>
            <p>Room Size</p>
            <input
              type="text"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              style={{
                textAlign: "right",
                paddingRight: "6px",
              }}
            />
            <input
              type="text"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              style={{
                marginLeft: "1rem",
                textAlign: "right",
                paddingRight: "6px",
              }}
            />
          </form>
        </div>

        {/* ******* END of INPUT PRICE ******* */}
        {/* ******* EXTRAS  ******* */}

        <div>
          <div className={style.checkbox}>
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">Breakfast</label>
            <br />
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">Pets</label>
          </div>
        </div>
      </div>
    );
  }
}
