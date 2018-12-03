import React, { Component, Fragment } from "react";
import Flatpickr from "./Flatpickr";

class Calendar extends Component {
  state = {
    v: "2018-11-23 01:01",
    onChange: (_, str) => {
      console.info(str);
    }
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState(state => ({
        v: state.v.replace("2017", "2018"),
        onChange: (_, str) => {
          console.info("New change handler: ", str);
        }
      }));
    }, 2000);
  }

  render() {
    const { v } = this.state;

    return (
      <Fragment>
        <p>Fechas</p>
      <Flatpickr
        options={{ mode: "range" }}
        onChange={(_, str) => console.info(str)}
      />
      </Fragment>
    );
  }
}

export default Calendar;
