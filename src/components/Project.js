import React from "react";

import ProjectCard from "../styles/ProjectCard";
import CardPhoto from "./CardPhoto";
import CardTitle from "./CardTitle";
import CardDescriptionStyle from "../styles/CardDescriptionStyle";
import CardTechIcons from "./CardTechIcons";
import CardLinks from "./CardLinks";

class Project extends React.Component {
  render() {
    return (
      <ProjectCard>
        <CardPhoto photo={this.props.project.photo}>
          <CardTitle
            title={[this.props.project.title, this.props.project.description]}
          />
        </CardPhoto>
        <CardDescriptionStyle>
          {this.props.project.details}
        </CardDescriptionStyle>
        <CardTechIcons
          technology={this.props.project.technology}
          icons={this.props.icons}
        />
        <CardLinks links={this.props.project.links} />
      </ProjectCard>
    );
  }
}

export default Project;
