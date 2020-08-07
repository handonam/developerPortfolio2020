import styled from 'styled-components';
import {COLORS} from '../../shared/colors.js'

export const HeroContainer = styled.div`
  display: flex;
  background-color: ${COLORS.GRAY1};
  height: 100vh;
  align-items: center;
`

export const HeroHeading = styled.div`
  color: ${COLORS.GRAY6};
  line-height: 1;
  margin: auto;
  margin-right: 30px;
  padding: 0 5%;
  text-align: center;
`
export const HeroHeadingH1 = styled.h1`
  font-family: Poly;
  font-weight: 600;
  font-style: italic;
`
export const HeroHeadingP = styled.p`
  font-weight: 300;
`
