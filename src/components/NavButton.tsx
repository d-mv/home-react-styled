import React from "react";

import Style from "../style/NavButton";

const NavButton = (IProps: {
  hide: () => void;
  section: string;
  margin: string;
}) => {
  const [rotate, setRotate] = React.useState(false);

  const handleHover = (props: boolean) => {
    props ? setRotate(true) : setRotate(false);
  };

  return (
    <Style
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      onClick={() => IProps.hide()}
      rotate={rotate ? 1 : 0}
      margin={IProps.margin}>
      {IProps.section}
    </Style>
  );
};

export default NavButton;
