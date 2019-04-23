import React from "react";

import { CardLinkStyle } from "../style/CardElements";

interface Window {
  open: (arg0: any) => void
}

const handleClick = (url: string) => {
  window.open(url, "_blank")
};

const CardLink = (IProps: { link: string; id: string }) => {
  return (
    <CardLinkStyle onClick={() => handleClick(IProps.link)}>
      {IProps.id}
    </CardLinkStyle>
  );
};
export default CardLink;
