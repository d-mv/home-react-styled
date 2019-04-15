import React from "react";

import Content from "../styles/Content";
import Project from "../components/Project";
import ProjectCards from "../styles/ProjectCards";

import data from "../data/data.json";

export default function Projects() {
  return (
    <Content>
      <ProjectCards>
        {Object.keys(data.projects).map(project_id => {
          return (
            <Project
              key={project_id}
              project={data.projects[project_id]}
              icons={data.technology}
            />
          );
        })}
      </ProjectCards>
    </Content>
  );
}
