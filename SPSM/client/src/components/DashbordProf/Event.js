import React, { Component } from "react";
import axios from "axios";
import "../DashbordStudent/event.css";

class Event extends Component {
  state = {
    arr: []
  };
  componentDidMount = () => {
    axios
      .get("/api/Event")
      .then(res => {
        this.setState({ arr: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="d-flex">
        {this.state.arr.map(el => (
          <figure class="snip1096 yellow">
            <img src={el.img} alt="sample47" style={{ height: "300px" }} />
            <figcaption>
              <h3>{el.name}</h3>
              <p>{el.ctn}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    );
  }
}

export default Event;
