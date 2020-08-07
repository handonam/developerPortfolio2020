import React from 'react';
import {
  Link
} from 'react-router-dom';


import {
  MenuScreen,
  MenuList,
  MenuItem
} from './MenuFullScreen.styled.jsx';

const MenuFullScreen = (props) => (
  <MenuScreen active={props.active}>
    <MenuList active={props.active}>
      <MenuItem><Link to="/">Home</Link></MenuItem>
      <MenuItem><Link to="/contact">Contact</Link></MenuItem>
    </MenuList>
  </MenuScreen>   
)

export default MenuFullScreen;
