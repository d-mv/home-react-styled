import React from "react";
import NewWindow from "react-new-window";

import { CardLinkStyle } from "../style/CardElements";

const handleClick = (url: string) => {
  if (window.open(url, "_blank") !== null) {
    const newWindow = <NewWindow url={url} />
  }
};

const CardLink = (IProps: { link: string; id: string }) => {
  return (
    <CardLinkStyle onClick={() => handleClick(IProps.link)}>
      {IProps.id}
    </CardLinkStyle>
  );
};
export default CardLink;
