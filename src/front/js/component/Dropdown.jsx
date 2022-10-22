import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export const Dropdown= ()=> {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">w
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
