import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "../views/Home";
import Projects from "../views/Projects";
import Photos from "../views/Photos";
import Contacts from "../views/Contacts";

import Logo from "../components/Logo";
import NavButton from "../components/NavButton";
import Style from "../style/Navigation";
import NavBar from "../style/NavBar";
import Wrapper from "../style/Wrapper";

import data from "../data/data.json";

const App = () => {
  const [show, toggleShow] = useState(window.screen.width < 500 ? false : true);
  const largeScreen = window.screen.width < 500 ? false : true;
  const sections = data.sections;

  const hideIfSmallScreen = () => {
    if (!largeScreen) {
      toggleShow(false);
    }
  };
  // set modules
  const home = () => <Home />;
  const projects = () => (
    <Projects data={data.projects} technology={data.technology} />
  );
  const photos = () => <Photos data={data.photos} />;
  const contacts = () => <Contacts data={data.contacts} />;

  // set menu style
  let menuStyle = "none";
  if (show) menuStyle = "flex";

  return (
    <Wrapper>
      <Router>
        {/* navigation */}
        <Style>
          <Logo toggle={toggleShow} show={show} />
          <NavBar show={menuStyle}>
            {sections.map((section: { name: string; margin: string }) => {
              return (
                <Link
                  key={section.name}
                  to={`/${
                    section.name === "HOME" ? "" : section.name.toLowerCase()
                  }`}>
                  <NavButton
                    hide={hideIfSmallScreen}
                    margin={section.margin}
                    section={section.name}
                  />
                </Link>
              );
            })}
          </NavBar>
        </Style>
        {/* routes */}
        <Route path='/' exact component={home} />
        <Route path='/projects' exact component={projects} />
        <Route path='/photos' component={photos} />
        <Route path='/contacts' component={contacts} />
      </Router>
    </Wrapper>
  );
};

export default App;
