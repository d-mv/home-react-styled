import React from "react";

import { CardTechIconStyle } from "../style/CardElements";

const CardTechIcon = (IProps: {icon:string}) => {
  return (
    <CardTechIconStyle>
      <img src={IProps.icon} alt="" />
    </CardTechIconStyle>
  );
};

export default CardTechIcon;
