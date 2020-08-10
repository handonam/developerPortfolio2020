import styled from 'styled-components';
import {COLORS} from '../../shared/colors.js'

export const HeroContainer = styled.div`
  background-image: linear-gradient(to bottom, black, ${COLORS.BLUE_DARK_ACCENT} 100%);
  height: 150vh;
  text-align: center;
`

export const HeroHeading = styled.div`
  color: ${COLORS.GRAY6};
  line-height: 1;
  padding: 33vh 5%;
  text-align: center;
`
export const HeroHeadingH1 = styled.h1`
  font-family: 'Libre Franklin';
  font-weight: 400;
  text-transform: uppercase;
  padding-bottom: 1rem;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2.5rem;
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`
export const HeroHR = styled.div`
  border-bottom: 2px solid ${COLORS.GRAY6};
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;

export const HeroHeadingP = styled.p`
  font-family: 'Libre Franklin';
  font-weight: 300;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: .15rem;
  
  @media (min-width: 768px) {
    letter-spacing: .5rem;
  }
`

export const ProjectsIntroArrow = styled.div`
  margin-top: 25vh;
  &:before {
    content: '';
    position: absolute;
    top: 1rem;
    left: calc(50% - 25px);
    height: 50px;
    width: 50px;
    background: url('/images/components/glyphs/arrow-down-white.svg') no-repeat;
    background-size: contain;
  }
`;
