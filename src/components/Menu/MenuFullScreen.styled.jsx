import styled from 'styled-components';
import {COLORS} from '../../shared/colors.js'
import {
  Link
} from 'react-router-dom';

export const MenuScreen = styled.nav`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${COLORS.BRAND_PRIMARY};
  height: ${(props) => props.active ? '100vh' : 0};
  transition: height .4s cubic-bezier(.345,0,0,1);
  overflow: hidden;
  z-index: 20;
  
  @media (min-width: 768px) {
    justify-content: left;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  font-size: 2rem;
  font-family: Libre Franklin;
  font-weight: 200;
  line-height: 1;
  padding-bottom: 5rem;
  transform: translate3d(0, ${(props) => !props.active ? '-120px' : 0}, 0);
  transition: transform 1.2s;
  
  @media (min-width: 480px) {
    font-size: 3rem;
  }
  @media (min-width: 768px) {
    font-size: 6.25rem;
  }
`;
export const MenuItem = styled.li`
  & a {
    color: ${COLORS.GRAY6};
    text-decoration: none;
    margin-bottom: 2rem;
    display: block;
  }
  & a:hover {
    color: ${COLORS.BLUE_DARK_ACCENT};
  }
`;
