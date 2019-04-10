import React, { useState } from "react";

import Main from "./styles/Main";
import Home from "./containers/Home";
import Projects from "./containers/Projects";
import Photos from "./containers/Photos";
import Contacts from "./containers/Contacts";
import Navigation from "./containers/Navigation";

const App = () => {
  const [module, setModule] = useState("HOME");

  return (
    <Main>
      <Navigation toggle={setModule} />
      {module === "HOME" ? <Home /> : null}
      {module === "PROJECTS" ? <Projects /> : null}
      {module === "PHOTOS" ? <Photos /> : null}
      {module === "CONTACTS" ? <Contacts /> : null}
    </Main>
  );
};

export default App;
