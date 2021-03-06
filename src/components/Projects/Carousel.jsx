import React from 'react';
import SlideContext from './SlideContext.jsx';

import {
  CarouselContainer,
  CarouselStrip
} from './Carousel.styled.js';

const Carousel = (props) => {
  return (
    <SlideContext.Consumer>
      {context=> (
        /* The "window" that reveals images one by one on the strip */
        <CarouselContainer 
          className={props.className}
          windowWidth={props.width}
          windowHeight={props.height}>
          
          {/* The strip that contains all images to slide through */}
          <CarouselStrip 
            windowWidth={props.width}
            slideNumber={context.activeSlide}
            offset={props.offset || 0}>
            {props.children}
          </CarouselStrip>
          
        </CarouselContainer>   

      )}
    </SlideContext.Consumer>
  )
}

export default Carousel;
