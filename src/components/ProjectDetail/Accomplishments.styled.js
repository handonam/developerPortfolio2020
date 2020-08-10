import styled from 'styled-components';
import {COLORS, SHADOWS} from '../../shared/colors.js'

export const AccomplishmentContainer = styled.div`
  color: ${COLORS.GRAY1};
  padding-top: 4rem;
`;
export const AccomplishmentTitle = styled.h2.attrs({
  className: 's-Sixteen s-Column'
})`
  font-family: 'Libre Franklin';
  font-size: 2.5rem;
  line-height: 1;
  margin-bottom: 1rem;
  margin-top: 0;
`;

export const AccomplishmentSection = styled.section.attrs({
  className: 's-Container'
})`
  margin-bottom: 2em;
  padding-top: 4em;
  padding-bottom: 5em;
`;

export const DetailsContainer = styled.div.attrs({
  className: 's-TwoThirds s-Column'
})`
`;

export const Title = styled.h3.attrs({
  className: 's-Sixteen s-Column s-Clearfix'
})`
  font-family: 'Libre Franklin';
  font-size: 1.5rem;
  line-height: 1;
  margin-bottom: 3rem;
  margin-top: 0;
  border-bottom: 1px solid ${COLORS.GRAY5};
  padding-bottom: .5rem;
  
  @media (min-width: 480px) {
    font-size: 2rem;
  }
`;


export const TaskSection = styled.div`
  padding-bottom: 10em;
  display: flex;
  flex-direction: column-reverse;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const TaskDescription = styled.p`
  flex: 2;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 200;
  margin-top: 0;
  
  strong {
    font-weight: 500;
  }
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
    margin-right: 2rem;
    margin-left: 1.041666666666667%;
  }
`;
export const TaskImageContainer = styled.div`
  flex: 1;
  
  @media (min-width: 768px) {
    margin-right: 1.041666666666667%;
  }
`;

export const TaskImage = styled.img`
  ${SHADOWS.BOXSHADOW1}
  
  width: 100%;
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  display: block;
  
  @media (min-width: 768px) {
  }
`;
