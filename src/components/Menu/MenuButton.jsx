import React from 'react';
import {MenuButtonContainer} from "./MenuButton.styled.jsx";

const MenuButton = (props) => (
  <MenuButtonContainer onClick={props.handleClick}>
    <div>{props.active ? 'Close' : 'Menu'}</div>
  </MenuButtonContainer>   
)

export default MenuButton;
