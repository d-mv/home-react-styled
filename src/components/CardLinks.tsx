import React from "react";

import CardLink from "./CardLink";
import {CardLinksStyle} from "../style/CardElements";

const CardLinks = (IProps: { links: any }) => {
  return (
    <CardLinksStyle>
      {Object.keys(IProps.links).map((link_id:any) => {
        if (IProps.links[link_id] !== "") {
          return (
            <CardLink
              key={link_id}
              link={IProps.links[link_id]}
              id={link_id}
            />
          );
        }
        return null;
      })}
    </CardLinksStyle>
  );
};

export default CardLinks;
