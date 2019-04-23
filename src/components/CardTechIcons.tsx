import React from "react";

import CardTechIcon from "./CardTechIcon";
import { CardTechIconsWrapper } from "../style/CardElements";

const CardTechIcons = (IProps:{technology: Array<string>,icons:any}) => {
  return (
    <CardTechIconsWrapper>
      {IProps.technology.map((tech:any) => {
        return <CardTechIcon key={tech} icon={IProps.icons[tech][0]} />;
      })}
    </CardTechIconsWrapper>
  );
};

export default CardTechIcons;
