import React from "react";

import CardPhotoStyle from "../styles/CardPhotoStyle";

const Photo = props => {
  return <CardPhotoStyle image={props.photo}>{props.children}</CardPhotoStyle>;
};

export default Photo;
