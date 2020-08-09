import styled from 'styled-components';
import {COLORS} from '../../shared/colors.js'

export const MenuButtonContainer = styled.button`
  height: 70px;
  width: 80px;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 21;
  background-color: ${COLORS.BRAND_PRIMARY};
  border: none;
  outline: none;
  color: ${COLORS.GRAY6};
  cursor: pointer;
  &:hover {
    color: ${COLORS.WHITE};
    text-decoration: underline;
  }
  
  @media (min-width: 768px) {
    bottom: initial;
    top: 0;
  }
  @media (min-width: 1440px) {
    left: 0;
    bottom: initial;
    top: 2rem;
  }
`;
