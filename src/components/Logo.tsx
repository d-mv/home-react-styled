import React from "react";

import Style from "../style/Logo";

const Logo = (IProps: { toggle: any; show: boolean }) => {
  return <Style onClick={() => IProps.toggle(!IProps.show)}>DM</Style>;
};

export default Logo;
