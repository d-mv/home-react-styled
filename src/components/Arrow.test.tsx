import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/modules";
import "../../test/setupTest";

import Arrow from "./Arrow";

/**
 * Functional React component for congrats message
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

const mockFn = jest.fn();

test("component renders left arrow", () => {
  let wrapper: any = shallow(<Arrow click={mockFn} left />);
  const component = findByTestAttr(wrapper, "component-arrow-left");
  expect(component.length).toBe(1);
});
test("component renders right arrow", () => {
  let wrapper: any = shallow(<Arrow click={mockFn} right />);
  const component = findByTestAttr(wrapper, "component-arrow-right");
  expect(component.length).toBe(1);
});
