import React from 'react';

import {
  Link
} from 'react-router-dom';

import {
  ProjectDetailContainer,
  Title,
  Description,
  DetailsText,
  ResonsibilitiesText,
  ImageContainer,
  ProjectImage,
  DetailsContainer,
  DetailsUL,
  DetailsLI,
} from "./index.styled.js";


const ProjectDetail = (props) => {
  return (
    <ProjectDetailContainer>
      <Title>{props.project.name}</Title>
      <Description>{props.project.description}</Description>
      <DetailsContainer>
        <ImageContainer>
          <ProjectImage src={props.project.bgUrl} alt={props.project.name} />
        </ImageContainer>
        <DetailsText>
          <ResonsibilitiesText>
            {props.project.responsibilityDetail}
          </ResonsibilitiesText>
          <DetailsUL>
            <DetailsLI>Role</DetailsLI>
            <DetailsLI>Technologies</DetailsLI>
            <DetailsLI>Period</DetailsLI>
          </DetailsUL>
        </DetailsText>
      </DetailsContainer>
    </ProjectDetailContainer>
  )
}


export default ProjectDetail;
