import React from 'react';

import {
  Link
} from 'react-router-dom';

import {
  ProjectsContainer,
  ProjectList,
  Project,
  ProjectTitle,
  ProjectHeading,
  ProjectImageCarousel,
  ProjectImageCarouselButton,
  ProjectTitleCarousel,
  ViewProjectLink,
  ProjectTime
} from "./index.styled.js";

/**
 * Mocking the API here.
 */
import ProjectData from "../../api/works.json";

import SlideContext from './SlideContext.jsx';
import WindowSizeContext from '../../shared/context/windowSize.jsx';

const Projects = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  
  const slideSize = {
    sides: .25,
    center: .48,
  };
  
  return (
    // We store the active project slide in SlideContext, to be retrieved by child components below
    <SlideContext.Provider value={{
        activeSlide
      }}>
      
      {/* We also store the window size as another context to be used by child components */}
      <WindowSizeContext.Consumer>
      {context => (
        <ProjectsContainer>
          <ProjectList style={{
            // see styled-component to see why this is being set.
            '--data-side-width': `${context.windowSize.width * slideSize.sides}px`,
            '--data-center-width': `${context.windowSize.width * slideSize.center}px`
          }}>
            <ProjectImageCarouselButton 
              position={'left'}
              onClick={() => setActiveSlide(activeSlide - 1)} disabled={activeSlide <= 0}>
              <ProjectImageCarousel 
                width={`${context.windowSize.width * slideSize.sides}px`} 
                height={`${context.windowSize.width * slideSize.sides}px`} 
                offset={-1}>
                {
                  ProjectData.map((prjct, key) => 
                      <img style={{width: context.windowSize.width * slideSize.sides}} src={prjct.bgUrl} />)
                }
              </ProjectImageCarousel>
            </ProjectImageCarouselButton>
            <ProjectImageCarousel
              isCenter={true}
              width={`${context.windowSize.width * slideSize.center}px`} 
              height={`${context.windowSize.width * slideSize.center}px`}>
              {
                ProjectData.map((prjct, key) => 
                  <Link to={`/project/${prjct.slugname}`}><img style={{width: context.windowSize.width * slideSize.center}} src={prjct.bgUrl} /></Link>)
              }
            </ProjectImageCarousel>
            <ProjectImageCarouselButton 
              position={'right'}
              onClick={() => setActiveSlide(activeSlide + 1)} disabled={activeSlide >= ProjectData.length - 1}>
              <ProjectImageCarousel 
                width={`${context.windowSize.width * slideSize.sides}px`} 
                height={`${context.windowSize.width * slideSize.sides}px`} 
                fromLeft={`calc(100% - ${context.windowSize.width * slideSize.sides/2}px)`} 
                offset={1}>
                {
                  ProjectData.map((prjct, key) => 
                      <img style={{width: context.windowSize.width * slideSize.sides}} src={prjct.bgUrl} />)
                }
              </ProjectImageCarousel>
            </ProjectImageCarouselButton>
            <ProjectTitleCarousel 
              width={"100vw"} height={"auto"} >
              {
                ProjectData.map((prjct, key) => (
                  <ProjectHeading>
                    <ProjectTitle>{prjct.name}</ProjectTitle>
                    <ViewProjectLink to={`/project/${prjct.slugname}`}>View this project ></ViewProjectLink>
                  </ProjectHeading>
                )
              )}
            </ProjectTitleCarousel>
          </ProjectList>
        </ProjectsContainer>
      )}
      </WindowSizeContext.Consumer>
    </SlideContext.Provider>
  )
}


export default Projects;
