import styled from 'styled-components';
import {COLORS, SHADOWS} from '../../shared/colors.js'

export const Contact = styled.div`
  background: ${COLORS.BLUE_DARK_ACCENT};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const ContactCenterContainer = styled.div`
  padding: 0 5%;
`;

export const ContactHeading = styled.h1`
  color: ${COLORS.GRAY6};
  ${SHADOWS.TEXTSHADOW1};
  display: inline-block;
  line-height: 1;
  vertical-align: middle;
  font-family: 'Libre Franklin';
  
  a {
    color: ${COLORS.BRAND_PRIMARY};
  }
`;

export const ContactSelfieContainer = styled.div`
  border-radius: 50%;
  display: inline-block;
  height: 100px;
  overflow: hidden;
  vertical-align: middle;
  width: 100px;
  margin-left: 2rem;
`;

export const ContactSelfie = styled.img`
  width: 100%;
`;
