import React from "react";

import CardLinkStyle from "../styles/CardLinkStyle";

const handleClick = url => {
  window.open(url, "_blank").focus();
};

const CardLink = props => {

  return (
    <CardLinkStyle onClick={handleClick.bind(this, props.link)}>{props.id}</CardLinkStyle>
  );
};
export default CardLink;
