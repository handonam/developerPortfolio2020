import styled from 'styled-components';


/**
 * Inline Styling Note:
 * 
 * We want to use `.attr(props=>())` to inline-style 
 * because these size values change frequently from window resizing. 
 * If we passed in window resize values as props instead,
 * then new CSS classes get generated on every window resize (not good!).
 */

/**
 * The "Window" in which we see the rotating carousel inside
 */
export const CarouselContainer = styled.div.attrs(props => ({
    // See Inline Styling Note above
    style: {
      width: props.windowWidth,
      height: props.windowHeight
    }
  }))`
  overflow: hidden;
  z-index: 4;
`;

/**
 * The Carousel Strip that contains a strip of images to slide through.
 */
export const CarouselStrip = styled.div.attrs(props => ({
    // See Inline Styling Note above
    style: {
      // Offset the strip based on the slide number and its offset
      transform: `translate3d(calc(
          ${props.windowWidth}
          * (${props.slideNumber + props.offset})
          * -1), 0, 0)`,
      // calculate the total width so we don't flex wrap any items.
      width: `calc(${props.windowWidth} * ${props.children.length})`
    }
  }))`

  display: flex;
  flex-direction: row;
  transition: transform 1s;
`;
