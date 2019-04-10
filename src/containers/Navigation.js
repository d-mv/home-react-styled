import React from "react";

import Logo from "../components/Logo";
import NavigationStyle from "../styles/NavigationStyle";
import NavBar from "../styles/NavBar";
import NavButton from "../styles/NavButton";

const sections = [
  { name: "HOME", margin: "30px" },
  { name: "PROJECTS", margin: "40px" },
  { name: "PHOTOS", margin: "40px" },
  { name: "CONTACTS", margin: "1rem" }
];

class Navigation extends React.Component {
  state = {
    show: true,
    largeScreen: true
  };

  componentWillMount = () => {
    if (window.screen.width < 500) {
      this.setState({
        show: false,
        largeScreen: false
      });
    }
  };

  handleClick = event => {
    this.props.toggle(event.target.innerText);
  };

  handleLogoClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    let show = "none";
    if (this.state.show) show = "flex";
    return (
      <NavigationStyle>
        <Logo toggle={this.handleLogoClick} />
        <NavBar show={show}>
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
      </NavigationStyle>
    );
  }
}

export default Navigation;
