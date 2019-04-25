import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/modules";

import "../../test/setupTest";

import CardLink from "./CardLink";

const testData = {
  id: "Link",
  link: "https://www.github.io"
};

/**
 * Functional React component for congrats message
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = (props: any = {}) => {
  return shallow(<CardLink {...props} />);
};

test("component doesn't render anything without data", () => {
  const component = findByTestAttr(setup(), "component-card-link");
  expect(component.length).toBe(0);
});

describe("component works fine when supplied data", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = setup(testData);
  });
  test("component renders link", () => {
    const componentsNodes = findByTestAttr(wrapper, "component-card-link");
    expect(componentsNodes.length).toBe(1);
  });

  test("component renders link id", () => {
    const componentsNode = findByTestAttr(wrapper, "component-card-link");
    expect(componentsNode.text()).toBe(testData.id);
  });
});
