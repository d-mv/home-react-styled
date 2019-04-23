import React from "react";

import ProjectCard from "../style/ProjectCard";
import CardPhoto from "./CardPhoto";
import CardTitle from "./CardTitle";
import { CardDescriptionStyle } from "../style/CardElements";
import CardTechIcons from "./CardTechIcons";
import CardLinks from "./CardLinks";



const Project = (IProps: {
  project: any, icons: {} }) => {

    return (
      <ProjectCard>
        <CardPhoto photo={IProps.project.photo}>
          <CardTitle
            title={IProps.project.title}
            description={IProps.project.description}
          />
        </CardPhoto>
        <CardDescriptionStyle>
          {IProps.project.details}
        </CardDescriptionStyle>
        <CardTechIcons
          technology={IProps.project.technology}
          icons={IProps.icons}
        />
        <CardLinks links={IProps.project.links} />
      </ProjectCard>
    );
  }


export default Project;
