import React from "react";

import LogoStyle from "../styles/LogoStyle";

const Logo = props => {
  return <LogoStyle onClick={props.toggle}>DM</LogoStyle>;
};

export default Logo;
