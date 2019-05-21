import React from "react";

import Content from "../style/Content";
import Project from "../components/Project";
import ProjectCards from "../style/ProjectCards";

const Projects = (Projects: {
  data: {
    [index: string]: {
      title: string;
      description: string;
      photo: string;
      details: string;
      technology: string[];
      links: { [index: string]: string };
    };
  };
  technology: {
    [index: string]: string[];
  };
}) => {
  if (Projects.data && Projects.technology) {
    return (
      <Content data-test="view-content-projects">
        <ProjectCards data-test="style-project-cards">
          {Object.keys(Projects.data).map((project_id: any) => {
            const proj = Projects.data[project_id.toString()];
            return (
              <Project
                data-test="component-project"
                key={project_id}
                project={proj}
                icons={Projects.technology}
              />
            );
          })}
        </ProjectCards>
      </Content>
    );
  } else {
    return <Content data-test="view-content-projects-empty" />;
  }
};

export default Projects;
