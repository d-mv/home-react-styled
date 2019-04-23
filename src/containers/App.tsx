import React, { useState } from "react";

import Main from "../style/Main";
import Home from "../views/Home";
import Projects from "../views/Projects";
import Photos from "../views/Photos";
import Contacts from "../views/Contacts";
import Navigation from "./Navigation";

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
