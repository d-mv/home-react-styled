import React from "react";

import ProjectCard from "../style/ProjectCard";
import CardPhoto from "./CardPhoto";
import CardTitle from "./CardTitle";
import { CardDescriptionStyle } from "../style/CardElements";
import CardTechIcons from "./CardTechIcons";
import CardLinks from "./CardLinks";

const Project = (IProps: { project: any; icons: {} }) => {
  const handleClick = (links: any) => {
    if ("deployed" in links) {
    window.open(links.deployed, "_blank");
    } else if ("github" in links) {
    window.open(links.github, "_blank");
    } else {
      // console.log("no links");
    }
  };
  return (
    <ProjectCard
      data-test="component-project"
      onClick={() => handleClick(IProps.project.links)}
    >
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
};

export default Project;
