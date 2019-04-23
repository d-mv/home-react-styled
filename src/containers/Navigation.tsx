import React, { useState } from "react";

import Logo from "../components/Logo";
import Style from "../style/Navigation";
import NavBar from "../style/NavBar";
import NavButton from "../components/NavButton";

const data:any = require('../data/data.json')

const Navigation = (IProps: { toggle: (arg0: any) => void }) => {
  const sections = data.sections;

  const [show, toggleShow] = useState(window.screen.width < 500 ? false : true);
  const largeScreen = window.screen.width < 500 ? false : true;

  const hideIfSmallScreen = () => {
    if (!largeScreen) {
      toggleShow(false);
    }
  };

  let menuStyle = "none";
  if (show) menuStyle = "flex";
  return (
    <Style>
      <Logo toggle={toggleShow} show={show} />
      <NavBar show={menuStyle}>
        {sections.map((section: { name: string; margin: string; }) => {
          return (
            <NavButton
              key={section.name}
              hide={hideIfSmallScreen}
              toggle={IProps.toggle}
              margin={section.margin}
              section={section.name}
            />
          );
        })}
      </NavBar>
    </Style>
  );
};
// }

export default Navigation;
