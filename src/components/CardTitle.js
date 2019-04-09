import React from "react";

import CardTitleWrapper from "../styles/CardTitleWrapper";
import CardTitleLineOne from "../styles/CardTitleLineOne";
import CardTitleLineTwo from "../styles/CardTitleLineTwo";

const CardTitle = props => {
  return (
    <CardTitleWrapper>
      <CardTitleLineOne>{props.title[0]}</CardTitleLineOne>
      <CardTitleLineTwo>{props.title[1]}</CardTitleLineTwo>
    </CardTitleWrapper>
  );
};

export default CardTitle;
