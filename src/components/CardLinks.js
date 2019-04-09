import React from "react";

import CardLink from "./CardLink";
import CardLinksStyle from "../styles/CardLinksStyle";

const CardLinks = props => {
  return (
    <CardLinksStyle>
      {Object.keys(props.links).map(link_id => {
        if (props.links[link_id] !== "") {
          return (
            <CardLink key={link_id} link={props.links[link_id]} id={link_id} />
          );
        }
      })}
    </CardLinksStyle>
  );
};

export default CardLinks;
