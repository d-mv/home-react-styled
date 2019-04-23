import React from "react";

import Content from "../style/Content";
import Project from "../components/Project";
import ProjectCards from "../style/ProjectCards";

import data from "../data/data.json";

const  Projects = () => {
  const projects:any = data.projects
  return (
    <Content>
      <ProjectCards>
        {Object.keys(data.projects).map((project_id:any) => {
          return (
            <Project
              key={project_id}
              project={projects[project_id.toString()]}
              icons={data.technology}
            />
          );
        })}
      </ProjectCards>
    </Content>
  );
}

export default Projects
