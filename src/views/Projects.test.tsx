import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/modules";
import "../../test/setupTest";
import data from "../data/data.json";

import Projects from "./Projects";

/**
 * Functional React component for congrats message
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = (props: any = {}) => {
  return shallow(<Projects {...props} />);
};

describe("component renders fine", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = setup();
  });
  test("component renders OK", () => {
    const component = findByTestAttr(wrapper, "view-content-projects");
    expect(component.length).toBe(1);
  });

  test("component renders projects", () => {
    const componentsNodes = findByTestAttr(wrapper, "component-project");
    expect(componentsNodes.length).toBe(Object.keys(data.projects).length);
  });
});
