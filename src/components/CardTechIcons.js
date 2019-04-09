import React from "react";

import CardTechIcon from "./CardTechIcon";
import CardTechIconsStyle from "../styles/CardTechIconsStyle";

const CardTechIcons = props => {
  return (
    <CardTechIconsStyle>
      {props.technology.map(tech => {
        return <CardTechIcon key={tech} icon={props.icons[tech][0]} />;
      })}
    </CardTechIconsStyle>
  );
};

export default CardTechIcons;
