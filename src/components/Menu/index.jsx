import React from 'react';
import MenuButton from './MenuButton.jsx';
import MenuFullScreen from './MenuFullScreen.jsx';
import { useLocation } from "react-router-dom";

const MenuSystem = () => {
  const [menuActive, setMenuActive] = React.useState(false);
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    setMenuActive(false);
  }, [pathname]);
  
  return (
    <>
      <MenuButton active={menuActive} handleClick={() => setMenuActive(!menuActive)}/>
      <MenuFullScreen active={menuActive}/>
    </>
  )
}

export default MenuSystem;
