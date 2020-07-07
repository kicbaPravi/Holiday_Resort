import React, { Component } from "react";
import Client from "./Contentful";
const RoomContext = React.createContext();
const RoomConsumer = RoomContext.Consumer;

// Client.getEntries({
//   content_type: "beachResortRoom"
// })
//   .then(response => console.log(response.items))
//   .catch(console.error);

// Client.getAssets()
//   .then(function(assets) {
//     assets.items.map(function(asset) {
//       var imageURL = "https:" + asset.fields.file.url;

//       console.log(imageURL);
//     });
//   })
//   .catch(function(e) {
//     console.log(e);
//   });

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  //GET DATA

  getData = async () => {
    try {
      const response = await Client.getEntries({
        content_type: "beachResortRoom",
      });

      let rooms = this.formatData(response.items);

      let featuredRooms = rooms.filter((room) => room.featured === true);
      let maxPrice = Math.max(...rooms.map((item) => item.price));
      let maxSize = Math.max(...rooms.map((item) => item.size));

      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  formatData = (items) =>
    items.map((item) => {
      const id = item.sys.id;
      const images = item.fields.images.map((img) => img.fields.file.url);

      return {
        ...item.fields,
        id,
        images,
      };
    });

  getRoom = (slug) => {
    let tempRoom = [...this.state.rooms];
    const room = tempRoom.find((room) => room.slug === slug);

    return room;
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState(
      {
        [name]: value,
      },
      this.filterValue
    );
  };

  filterValue = () => {
    const {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state;

    let tempRooms = [...rooms];

    // Filter by type

    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    // Filter by capacity

    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }

    // Filter by price

    if (price < 600) {
      tempRooms = tempRooms.filter((rooms) => rooms.price <= price);
    }

    // Filter by size

    tempRooms = tempRooms.filter(
      (rooms) => rooms.size >= minSize && rooms.size <= maxSize
    );

    // Filter by breakfast

    if (breakfast) {
      tempRooms = tempRooms.filter((rooms) => rooms.breakfast === true);
    }

    // Filter by pets

    if (pets === true) {
      tempRooms = tempRooms.filter((rooms) => rooms.pets === true);
    }

    this.setState({
      sortedRooms: tempRooms,
    });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

export { RoomProvider, RoomConsumer, RoomContext };
