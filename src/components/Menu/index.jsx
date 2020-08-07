import React from 'react';
import MenuButton from './MenuButton.jsx';
import MenuFullScreen from './MenuFullScreen.jsx';

const MenuSystem = () => {
  const [menuActive, setMenuActive] = React.useState(false);
  
  return (
    <>
      <MenuButton handleClick={() => setMenuActive(!menuActive)}/>
      <MenuFullScreen active={menuActive}/>
    </>
  )
}

export default MenuSystem;
