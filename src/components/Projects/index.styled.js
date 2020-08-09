import styled from 'styled-components';
import {COLORS, SHADOWS} from '../../shared/colors.js'
import Carousel from "./Carousel.jsx";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${COLORS.GRAY3};
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
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
  top: calc(50% + var(--data-center-width)/4);
  z-index: 10;
  left: 0;
  
  @media (min-width: 480px) {
    left: ${(props) => `calc(50% - ${props.width}/2)`};
  }
`
export const ProjectHeading = styled.div`
  width: 100%;
  padding-left: 20px;
  @media (min-width: 480px) {
    padding-left: calc(50vw - var(--data-center-width) / 2 - 30px);
  }
`;

export const ProjectTitle = styled.h1`
  font-family: PTSerif;
  font-style: italic;
  font-size: 2rem;
  color: ${COLORS.GRAY6};
  ${SHADOWS.TEXTSHADOW1};
  display: block;
  @media (min-width: 480px) {
    font-size: 3rem;
  }
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

export const ProjectImageCarousel = styled(Carousel)`
  /**
   * I have to use CSS variables here because i can't set set inline styles
   * on an inherited component that also has its own inline styles
   *
   * (In other words, I can't do styled(Carousel).attrs() again)
   */
  ${(props) => {
    switch(props.position) {
      case 'left':
        return `
          left: calc(var(--data-side-width)/2 * -1);
          top: calc(50% - var(--data-side-width)/2);
          `;
      case 'right':
        return `
          left: calc(100% - var(--data-side-width)/2);
          top: calc(50% - var(--data-side-width)/2);
          `;
      case 'center':
        return `
          left: calc(50% - var(--data-center-width)/2);
          top: calc(50% - var(--data-center-width)/2);
          `;
      default:
        return 'initial';
    }
  }};

  position: absolute;
  z-index: 2;
`;

export const ProjectImageCarouselButton = styled.button`
  background-color: transparent;
  padding: 0;
  margin: 0; 
  border: none;
  outline: none;
  cursor: pointer;
  :before{
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(to ${props => props.direction}, rgba(0, 0, 0, .10), rgba(0, 0, 0, .60));
  }
  &:hover:before{
    background-image: rgba(0, 0, 0, .10);
  }
`;
export const ProjectTime = styled.div`
  color: ${COLORS.GRAY6};
`;
