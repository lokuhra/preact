import React from 'react'
import Dropdown, { MenuItem } from '@trendmicro/react-dropdown';
import './drop.css'

export default () => (
  <Dropdown onToggle={() => {}}>
      <p>Huespedes: 4 / Habitaciones: 2</p>
    <Dropdown.Toggle>+</Dropdown.Toggle>
    <Dropdown.Menu>
      <MenuItem>
        Menu item one
      </MenuItem>
      <MenuItem>
        Menu item two
      </MenuItem>
      <MenuItem>
        Menu item three
      </MenuItem>
    </Dropdown.Menu>
  </Dropdown>
);
