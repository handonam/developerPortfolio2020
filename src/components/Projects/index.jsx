import React from 'react';

import {
  Link
} from 'react-router-dom';

import {
  ProjectsContainer,
  ProjectList,
  ProjectTitle,
  ProjectHeading,
  ProjectImageCarousel,
  ProjectImageCarouselButton,
  ProjectTitleCarousel,
  ViewProjectLink
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
    sides: .45,
    center: .55,
  };
  
  return (
    // We store the active project slide in SlideContext, to be retrieved by child components below
    <SlideContext.Provider value={{
        activeSlide
      }}>
      
      {/* We also store the window size as another context to be used by child components */}
      <WindowSizeContext.Consumer>
      {context => {
        const widthSides = `${Math.min(context.windowSize.width, Math.min(context.windowSize.height, 1080)) * slideSize.sides}px`;
        const widthCenter = `${Math.min(context.windowSize.width, Math.min(context.windowSize.height, 1080)) * slideSize.center}px`;
        
        return (
          <ProjectsContainer style={{
            // see styled-component to see why this is being set for performance reasons
            '--data-side-width': widthSides,
            '--data-center-width': widthCenter
          }}>
            <ProjectList>
            
              {/**
                * The 3 image carousel controls that cycle through the projects.
                *
                * The "Sides" control the navigation. The "Center" opens the project.
                *
                * We take the viewport sizes (from window resize) to feed into the carousel.
                */}
              <ProjectImageCarouselButton 
                position={'left'}
                onClick={() => setActiveSlide(activeSlide - 1)} 
                disabled={activeSlide <= 0}>
                <ProjectImageCarousel 
                  width={widthSides} 
                  height={widthSides} 
                  offset={-1}>
                  {
                    ProjectData.map((prjct, key) => 
                      <img style={{width: widthSides, height: widthSides}} src={prjct.bgUrl} />
                    )
                  }
                </ProjectImageCarousel>
              </ProjectImageCarouselButton>
              
              <ProjectImageCarousel
                isCenter={true}
                width={widthCenter} 
                height={widthCenter}>
                {
                  ProjectData.map((prjct, key) => 
                    <Link to={`/project/${prjct.slugname}`}>
                      <img style={{width: widthCenter, height: widthCenter}} src={prjct.bgUrl} />
                    </Link>
                  )
                }
              </ProjectImageCarousel>
              
              <ProjectImageCarouselButton 
                position={'right'}
                onClick={() => setActiveSlide(activeSlide + 1)} 
                disabled={activeSlide >= ProjectData.length - 1}>
                <ProjectImageCarousel 
                  width={widthSides} 
                  height={widthSides} 
                  fromLeft={`calc(100% - ${widthSides/2})`} 
                  offset={1}>
                  {
                    ProjectData.map((prjct, key) => 
                      <img style={{width: widthSides, height: widthSides}} src={prjct.bgUrl} />
                    )
                  }
                </ProjectImageCarousel>
              </ProjectImageCarouselButton>
              
              
              {/**
                * Title Carousel.
                *
                * This functions as a full-width carousel, with the titles scrolling through.
                * Uses the same mechanism under the hood as ProjectImageCarousel
                */}
              <ProjectTitleCarousel 
                width={"100vw"} height={"auto"} >
                {
                  ProjectData.map((prjct, key) => (
                    <ProjectHeading>
                      <ProjectTitle>{prjct.name}</ProjectTitle>
                      <ViewProjectLink to={`/project/${prjct.slugname}`}>View this project ></ViewProjectLink>
                    </ProjectHeading>
                  ))
                }
              </ProjectTitleCarousel>
            </ProjectList>
          </ProjectsContainer>
        );
      }}
      </WindowSizeContext.Consumer>
    </SlideContext.Provider>
  )
}


export default Projects;
