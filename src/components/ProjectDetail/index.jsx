import React from 'react';
import dompurify from 'dompurify';

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
  LinkButton,
} from "./index.styled.js";


const ProjectDetail = (props) => {
  const sanitizer = dompurify.sanitize;

  return (
    <ProjectDetailContainer>
      <Title>{props.project.name}</Title>
      <Description>{props.project.description}</Description>
      <DetailsContainer>
        <ImageContainer>
          <ProjectImage src={props.project.bgUrl} alt={props.project.name} />
        </ImageContainer>
        <DetailsText>
          <ResonsibilitiesText
          dangerouslySetInnerHTML={{__html: sanitizer(props.project.responsibilityDetail)}} />
          <DetailsUL>
            <DetailsLI data-label="Role">{props.project.role}</DetailsLI>
            <DetailsLI data-label="Technologies">{props.project.tech.join(', ')}</DetailsLI>
            <DetailsLI data-label="Period">{props.project.period}</DetailsLI>
          </DetailsUL>
          <LinkButton to="/">Go Back</LinkButton>
        </DetailsText>
      </DetailsContainer>
    </ProjectDetailContainer>
  )
}


export default ProjectDetail;
