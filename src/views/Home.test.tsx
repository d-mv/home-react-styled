import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/modules";
import "../../test/setupTest";

import Home from "./Home";

const defaultProps = {};

/**
 * Functional React component for congrats message
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = (props: any = {}) => {
  return shallow(<Home {...props} />);
};

test("component renders OK", () => {
  let wrapper: any = setup();
  const component = findByTestAttr(wrapper, "view-content-home");
  expect(component.length).toBe(1);
});

test("component renders details", () => {
  let wrapper: any = setup();
  const styleGrid = findByTestAttr(wrapper, "style-grid");
  const styleProfile = findByTestAttr(wrapper, "style-profile");
  const componentMessage = findByTestAttr(wrapper, "component-message");
  const componentSendMessage = findByTestAttr(
    wrapper,
    "component-send-message"
  );
  const styleImage = findByTestAttr(wrapper, "style-image");
  expect(styleGrid.length).toBe(1);
  expect(styleProfile.length).toBe(1);
  expect(componentMessage.length).toBe(1);
  expect(componentSendMessage.length).toBe(1);
  expect(styleImage.length).toBe(1);
});
