import styled from 'styled-components';
import {COLORS, SHADOWS} from '../../shared/colors.js'
import Carousel from "./Carousel.jsx";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${COLORS.GRAY3};
  height: 100vh;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .60);
  }
`;
export const ProjectList = styled.ul`
  list-style: none;
  height: 100%;
  margin: 0;
  padding: 0;
`;
export const Project = styled.li`
  position: relative;
  height: 100%;
  background: url(${(props) => props.bgUrl}) no-repeat center;
  background-size: cover;
  display: flex;
`;
export const ProjectTitleCarousel = styled(Carousel)`
  position: absolute;
  top: calc(50%);
  left: ${(props) => `calc(50% - ${props.width}/2)`};
  z-index: 10;
`
export const ProjectHeading = styled.div`
  width: 100%;
  padding-left: 10%;
`;
export const ProjectTitle = styled.h1`
  font-family: PTSerif;
  font-style: italic;
  font-size: 4rem;
  color: ${COLORS.GRAY6};
  ${SHADOWS.TEXTSHADOW1};
  display: inline-block;
  margin-right: 30px;
`;
export const ProjectImageCarousel = styled(Carousel)`
  position: absolute;
  top: calc(50% - 25vh);
  left: ${(props) => props.fromLeft || `calc(50% - ${props.width}/2)`};
  z-index: 2;
`;
export const ProjectTime = styled.div`
  color: ${COLORS.GRAY6};
`;
export const ProjectNavigation = styled.div`
  position: absolute;
  top: 50vw;
  right: 2.5rem;
  z-index: 3;
`;
export const ProjectNav = styled.button`
  border: 5px solid;
  width: 85px;
  height: 85px;
  border-radius: 85px;
  background-color: none;
  border-color: ${(props) => props.isDisabled ? COLORS.BLUE_DARK_ACCENT : COLORS.BRAND_PRIMARY };
`;
