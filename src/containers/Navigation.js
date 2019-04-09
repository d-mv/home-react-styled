import React from "react";

import NavBar from "../styles/NavBar";
import NavButton from "../styles/NavButton";

const sections = [
  { name: "HOME", margin: "30px" },
  { name: "PROJECTS", margin: "40px" },
  { name: "PHOTOS", margin: "40px" },
  { name: "CONTACTS", margin: "1rem" }
];

class Navigation extends React.Component {
  handleClick = event => {
    this.props.toggle(event.target.innerText);
  };
  render() {
    return (
      <NavBar>
        {sections.map(section => {
          return (
            <NavButton
              onClick={this.handleClick}
              key={section.name}
              margin={section.margin}
            >
              {section.name}
            </NavButton>
          );
        })}
      </NavBar>
    );
  }
}

export default Navigation;
