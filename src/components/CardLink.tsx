import React from "react";

import { CardLinkStyle } from "../style/CardElements";

interface Window {
  open: (arg0: any) => void;
}

const handleClick = (url: string) => {
  window.open(url, "_blank");
};

const CardLink = (IProps: { link: string; id: string }) => {
  if (IProps.link && IProps.id) {
    return (
      <CardLinkStyle
        onClick={() => handleClick(IProps.link)}
        data-test="component-card-link"
      >
        {IProps.id}
      </CardLinkStyle>
    );
  } else {
    return null;
  }
};
export default CardLink;
