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
      <ProjectCard data-test="component-project">
        <CardPhoto photo={IProps.project.photo}>
          <CardTitle
            title={IProps.project.title}
            description={IProps.project.description}
            data-test="component-pcard-title"
          />
        </CardPhoto>
        <CardDescriptionStyle data-test="component-pcard-description">
          {IProps.project.details}
        </CardDescriptionStyle>
        <CardTechIcons
          technology={IProps.project.technology}
          icons={IProps.icons}
          data-test="component-ticons"
        />
        <CardLinks links={IProps.project.links} />
      </ProjectCard>
    );
  }


export default Project;
