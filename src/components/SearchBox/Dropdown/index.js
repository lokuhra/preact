import React from "react";
import Dropdown, { MenuItem } from "@trendmicro/react-dropdown";
import { Consumer } from "../Provider";
import "./drop.css";

export default () => (
  <Consumer>
    {({ state: { roomQuantity } }) => (
      <Dropdown onToggle={() => {}}>
        <p>Huepedes: X / Habitaciones: {roomQuantity}</p>
        <Dropdown.Toggle>+</Dropdown.Toggle>
        <Dropdown.Menu>
          <MenuItem>Menu item one</MenuItem>
          <MenuItem>Menu item two</MenuItem>
          <MenuItem>Menu item three</MenuItem>
        </Dropdown.Menu>
      </Dropdown>
    )}
  </Consumer>
);
