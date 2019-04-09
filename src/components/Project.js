import React from "react";
import styled from "styled-components";

import ProjectCard from "../styles/ProjectCard";
import CardPhoto from './CardPhoto'
import CardTitle from "./CardTitle";
import CardTechIcons from "./CardTechIcons";
import CardLinks from './CardLinks'


const CardDescription = styled.section`
  grid-area: details;
  padding: 10px;
`;

class Project extends React.Component {
  render() {
    return (
      <ProjectCard>
        <CardPhoto photo={this.props.project.photo}>
          <CardTitle title={[this.props.project.title, this.props.project.description]}/>
        </CardPhoto>
        <CardDescription>{this.props.project.details}</CardDescription>
        <CardTechIcons technology={this.props.project.technology} icons={this.props.icons}/>
        <CardLinks links={this.props.project.links}/>
      </ProjectCard>
    );
  }
}

export default Project;
