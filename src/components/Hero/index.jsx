import React from 'react';

import {
  HeroContainer,
  HeroHeading,
  HeroHeadingH1,
  HeroHeadingP,
} from "./index.styled.js";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroHeading>
        <HeroHeadingH1>
          Hanam Do
        </HeroHeadingH1>
        <HeroHeadingP>
          Software Engineer <br />
          From San Diego, CA
        </HeroHeadingP>
      </HeroHeading>
    </HeroContainer>
  )
}

export default Hero;
