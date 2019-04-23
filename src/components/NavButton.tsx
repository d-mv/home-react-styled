import React from "react";

import Style from "../style/NavButton";

const NavButton = (IProps: {
  toggle: (arg0: any) => void;
  hide: () => void;
  section: React.ReactNode;
  margin: string;
}) => {

  const [rotate, setRotate] = React.useState(false);

  const handleHover = (props: boolean) => {
    props ? setRotate(true) : setRotate(false);
  };

  const toggleSection = (section: React.ReactNode) => {
    IProps.toggle(section);
    IProps.hide();
  };
  return (
    <Style
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      onClick={() => toggleSection(IProps.section)}
      // to avoid issue with styled-components/ts
      rotate={rotate ? 1: 0}
      margin={IProps.margin}
    >
      {IProps.section}
    </Style>
  );
};

export default NavButton;
