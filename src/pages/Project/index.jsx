import React from 'react';

/**
 * Mocking the API here.
 */
import ProjectData from "../../api/works.json";
import ProjectDetail from "../../components/ProjectDetail/index.jsx";
import Accomplishments from "../../components/ProjectDetail/Accomplishments.jsx";

const Project = (props) => {
  const selectedProject = ProjectData.find(project => project.slugname === props.match.params.projectName);
  return (
    <>
      <ProjectDetail project={selectedProject} />
      <Accomplishments project={selectedProject} />
    </>
  );
}

export default Project;
