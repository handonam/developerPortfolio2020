import React from 'react';

import {
  ProjectsContainer,
  ProjectList,
  Project,
  ProjectTitle,
  ProjectHeading,
  ProjectImageCarousel,
  ProjectTitleCarousel,
  ProjectTime,
  ProjectNavigation,
  ProjectNav
} from "./index.styled.js";

import {
  Link
} from 'react-router-dom';

import ProjectData from "../../api/works.json";
import ImageTL from "../../images/works/works__bg--takelessons.jpg";
import ImagePocketspace from "../../images/works/works__bg--pocketspace.jpg";

import SlideContext from './SlideContext.jsx';

const Projects = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  
  // currently a crude way to map images to projects
  const ImageList = {
    TakeLessons: ImageTL,
    Pocketspace: ImagePocketspace
  }
  
  return (
    <SlideContext.Provider value={{
        activeSlide
      }}>
      <ProjectsContainer>
        <ProjectList>
          <ProjectImageCarousel width={"400px"} height={"400px"} fromLeft={'-200px'} offset={-1}>
            {ProjectData.map((prjct, key) => <img style={{width: 400}} src={ImageList[prjct.name]} />)}
          </ProjectImageCarousel>
          <ProjectImageCarousel width={"500px"} height={"500px"} >
            {ProjectData.map((prjct, key) => <a href={`#${key}`}><img style={{width: 500}} src={ImageList[prjct.name]} /></a>)}
          </ProjectImageCarousel>
          <ProjectImageCarousel width={"400px"} height={"400px"} fromLeft={'calc(100% - 200px)'} offset={1}>
            {ProjectData.map((prjct, key) => <img style={{width: 400}} src={ImageList[prjct.name]} />)}
          </ProjectImageCarousel>
          <ProjectTitleCarousel width={"100vw"} height={"auto"} >
            {ProjectData.map((prjct, key) => (
              <ProjectHeading>
                <ProjectTitle>{prjct.name}</ProjectTitle>
                <Link style={{width:"100vw"}}>View the Project</Link>
              </ProjectHeading>
            )
          )}
          </ProjectTitleCarousel>
        </ProjectList>
        <ProjectNavigation>
          <ProjectNav left onClick={() => setActiveSlide(activeSlide - 1)} disabled={activeSlide <= 0}/>
          <ProjectNav right onClick={() => setActiveSlide(activeSlide + 1)} disabled={activeSlide >= ProjectData.length - 1}/>
        </ProjectNavigation>
      </ProjectsContainer>
    </SlideContext.Provider>
  )
}


export default Projects;
