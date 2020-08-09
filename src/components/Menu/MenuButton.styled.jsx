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
  color: ${COLORS.GRAY5};
  
  @media (min-width: 768px) {
    left: 0;
    bottom: initial;
    top: 2rem;
  }
`;
