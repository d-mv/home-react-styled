import React from "react";

import CardTechIconStyle from "../styles/CardTechIconStyle";

const CardTechIcon = props => {
  return (
    <CardTechIconStyle>
      <img src={props.icon} alt="" />
    </CardTechIconStyle>
  );
};

export default CardTechIcon;
