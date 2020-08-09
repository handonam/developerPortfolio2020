import styled from 'styled-components';
import {COLORS, SHADOWS} from '../../shared/colors.js'
import Carousel from "./Carousel.jsx";
import {
  Link
} from 'react-router-dom';

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${COLORS.GRAY3};
  min-height: 100vh;
  height: calc(10rem + var(--data-center-width));
  padding-bottom: 10rem;
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
export const ProjectList = styled.div`
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
  position: relative;
`;

export const ProjectTitle = styled.h1`
  font-family: PTSerif;
  font-style: italic;
  font-size: 2rem;
  color: ${COLORS.GRAY6};
  ${SHADOWS.TEXTSHADOW2};
  display: block;
  margin-bottom: 0;
  
  @media (min-width: 480px) {
    font-size: 3rem;
    margin-bottom: .5rem;
  }
  @media (min-width: 768px) {
    font-size: 4rem;
    margin-bottom: .75rem;
  }
`;

export const ProjectImageCarousel = styled(Carousel)`
  ${(props) => !props.isCenter ? '' : `
      position: absolute;
      left: calc(50% - var(--data-center-width)/2);
      top: calc(50% - var(--data-center-width)/2);
      ${SHADOWS.BOXSHADOW1};
    `
  };

  z-index: 2;
`;

export const ProjectImageCarouselButton = styled.button`
  /* Reset the button style to be see-thru */
  background-color: transparent;
  padding: 0;
  margin: 0; 
  border: none;
  outline: none;
  cursor: pointer;
  
  
  /** Position the button !*/
  position: absolute;
  width: var(--data-side-width);
  height: var(--data-side-width);
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
      default:
        return '';
    }
  }};
  
  
  
  :before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(to ${props => props.direction}, rgba(0, 0, 0, .10), rgba(0, 0, 0, .60));
  }
  :after {
    content: '${props => props.position === 'left' ? '<' :'>'}';
    z-index: 2;
    color: ${COLORS.WHITE};
    font-weight: 700;
    position: absolute;
    top: 50%;
    ${props => props.position === 'left' ? 'right: 10px;' : 'left: 10px;'}
  }
  &:hover:before{
    background-image: rgba(0, 0, 0, .10);
  }
`;
export const ProjectTime = styled.div`
  color: ${COLORS.GRAY6};
`;

export const ViewProjectLink = styled(Link)`
  color: ${COLORS.GRAY6};
  text-decoration: none;
  ${SHADOWS.TEXTSHADOW2}
  
  padding: 1rem;
  display: inline-block;
  &:hover {
    text-decoration: underline;
    padding-left: 1.75rem;
    background-color: ${COLORS.BRAND_PRIMARY};
    transition: all .35s ease-in-out;
  }
  
  font-size: 1rem;
  @media (min-width: 480px) {
    font-size: 1.5rem;
    margin-left: 3rem;
  }
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`
