import styled from 'styled-components';

export const CarouselContainer = styled.div`
  overflow: hidden;
  width: ${(props) => props.windowWidth};
  height: ${(props) => props.windowHeight};
  z-index: 4;
`;
export const CarouselStrip = styled.div`
  transform: translate3d(${
    (props) => `calc(
      ${props.windowWidth}
      * (${props.slideNumber + props.offset})
      * -1)`}, 0, 0);
  transition: all 1s;
  width: ${(props) => 
    `calc(${props.windowWidth} * ${props.children.length})`};
  display: flex;
  flex-direction: row;
`;
