import React from 'react';

import {
  AccomplishmentContainer,
  AccomplishmentTitle,
  AccomplishmentSection,
  Title,
  TaskDescription,
  TaskImageContainer,
  TaskImage,
  TaskSection
} from "./Accomplishments.styled.js";

const Accomplishments = (props) => {
  return (
    <AccomplishmentContainer>
    <header class="s-Container">
      <AccomplishmentTitle>The Tasks</AccomplishmentTitle>
    </header>
    {
      props.project.accomplishments.map(accomplishment => (
        <AccomplishmentSection>
          <Title>{accomplishment.title}</Title>
          <div class="s-Clearfix"></div>
          {
            accomplishment.tasks.map(task => (
              <TaskSection>
                <TaskDescription>{task.description}</TaskDescription>
                <TaskImageContainer>
                  <TaskImage src={task.image.url} alt={task.image.caption} />
                </TaskImageContainer>
              </TaskSection>
            ))
          }
        </AccomplishmentSection>
      ))
    }
    </AccomplishmentContainer>
  )
}


export default Accomplishments;
