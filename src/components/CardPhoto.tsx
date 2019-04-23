import React from "react";

import { CardPhotoStyle } from "../style/CardElements";

const CardPhoto = (IProps: { children: any; photo: string }) => {
  return (
    <CardPhotoStyle image={IProps.photo}>{IProps.children}</CardPhotoStyle>
  );
};

export default CardPhoto;
