import React from "react";

import Logo from "../components/Logo";
import NavigationStyle from "../styles/NavigationStyle";
import NavBar from "../styles/NavBar";
import NavButton from "../styles/NavButton";

const sections = [
  { name: "HOME", margin: "10px" },
  { name: "PROJECTS", margin: "20px" },
  { name: "PHOTOS", margin: "20px" },
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

  handleLogoClick = () => {
    this.setState({ show: !this.state.show });
  };

  handleClick = section => {
    if (!this.state.largeScreen) {
      this.handleLogoClick();
    }
    this.props.toggle(section);
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
                onClick={this.handleClick.bind(this, section.name)}
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
