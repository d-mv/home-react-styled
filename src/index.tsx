import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import App from "./containers/App";

import "./index.scss";
import pip from "public-ip";

(async () => {
  const ip = await pip.v4();
  fetch(`https://home-reporter-app.herokuapp.com/?ip=${ip}&time=${new Date()}`)
    .then()
    .catch(e => console.log(e));
})();
ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register();
