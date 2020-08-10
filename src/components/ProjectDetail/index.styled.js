import styled from 'styled-components';
import {COLORS, SHADOWS} from '../../shared/colors.js'
import {Link} from 'react-router-dom';

export const ProjectDetailContainer = styled.div`
  background-color: ${COLORS.GRAY1};
  color: ${COLORS.GRAY6};
  padding-top: 4em;
  padding-bottom: 5em;
`

export const Title = styled.h1.attrs({
  className: 's-Container'
})`
  ${SHADOWS.TEXTSHADOW1}
  font-family: PTSerif;
  font-style: italic;
  font-size: 2rem;
  line-height: 1;
  margin-bottom: 1rem;
  
  @media (min-width: 480px) {
    font-size: 3rem;
  }
  
  @media (min-width: 768px) {
    font-size: 4rem;
  }
  
`;

export const Description = styled.p.attrs({
  className: 's-Container'
})`
  margin-bottom: 2em;
`;

export const DetailsContainer = styled.div.attrs({
  className: 's-Container'
})`
`;

export const ImageContainer = styled.div.attrs({
  className: 's-OneThird s-Column'
})`
`;

export const ProjectImage = styled.img`
  ${SHADOWS.BOXSHADOW1}
  width: 100%;
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  display: block;
  
  @media (min-width: 768px) {
    max-width: initial;
  }
`;

export const DetailsText = styled.div.attrs({
  className: 's-TwoThirds s-Column'
})`
`;

export const ResonsibilitiesText = styled.p`
  font-size: 1.33333rem;
  line-height: 1.5;
  font-weight: 200;
  margin-top: 0;
`;

export const DetailsUL = styled.div`
`;

export const DetailsLI = styled.div`
  :before {
    content: attr(data-label);
    font-weight: 500;
    display: block;
    font-size: 1.1rem;
    margin-bottom: .25rem;
  }
  margin-bottom: 1em;
`;

export const LinkButton = styled(Link)`
  background-color: transparent;
  border: 1px solid ${COLORS.GRAY6};
  border-radius: 5px;
  padding: .5rem 2rem;
  color: ${COLORS.GRAY6};
  float: right;
  text-decoration: none;
  transition: color .15s, border-color .15s;
  &:hover {
    border-color: ${COLORS.BRAND_PRIMARY};
    color: ${COLORS.BRAND_PRIMARY};
  }
`;
