import React, { useState } from "react";

import Home from "../views/Home";
import Projects from "../views/Projects";
import Photos from "../views/Photos";
import Contacts from "../views/Contacts";
import Navigation from "./Navigation";

import Wrapper from "../style/Wrapper";

import data from "../data/data.json";

const App = () => {
  const [module, setModule] = useState("HOME");

  return (
    <Wrapper>
      <Navigation toggle={setModule} />
      {module === "HOME" ? <Home /> : null}
      {module === "PROJECTS" ? <Projects data={data.projects} technology={data.technology}/> : null}
      {module === "PHOTOS" ? <Photos data={data.photos}/> : null}
      {module === "CONTACTS" ? <Contacts data={data.contacts} /> : null}
    </Wrapper>
  );
};

export default App;
