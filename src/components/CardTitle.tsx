import React from "react";

import {
  CardTitleWrapper,
  CardTitleLineOne,
  CardTitleLineTwo
} from "../style/CardElements";

const CardTitle = (IProps:{title:string,description:string}) => {
  return (
    <CardTitleWrapper>
      <CardTitleLineOne>{IProps.title}</CardTitleLineOne>
      <CardTitleLineTwo>{IProps.description}</CardTitleLineTwo>
    </CardTitleWrapper>
  );
};

export default CardTitle;
