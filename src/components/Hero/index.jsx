import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import {
  HeroContainer,
  HeroHeading,
  HeroHeadingH1,
  HeroHR,
  HeroHeadingP,
  ProjectsIntroArrow
} from "./index.styled.js";

const Hero = () => {
  return (
      <Parallax y={[-20, 20]}>
        <HeroContainer>
          <HeroHeading>
            <Parallax
                 y={[-50, 0]}
             >
              <HeroHeadingH1>
                Hanam Do
              </HeroHeadingH1>
            </Parallax>
            <Parallax
                y={[0, -25]}
             >
              <HeroHR/>
            </Parallax>
            <Parallax
                y={[200, 0]}
             >
              <HeroHeadingP>
                Front-End Developer <br />
                from San Diego, CA
              </HeroHeadingP>
            </Parallax>
            <Parallax y={[200, 0]}>
              <ProjectsIntroArrow></ProjectsIntroArrow>
            </Parallax>
          </HeroHeading>
        </HeroContainer>
    </Parallax>
  )
}

export default Hero;
