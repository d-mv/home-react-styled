import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/modules";
import "../../test/setupTest";

import Home from "./Home";

const defaultProps = {}

/**
 * Functional React component for congrats message
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = (props: any = {}) => {
  return shallow(<Home {...props} />);
};

// describe("component works fine without documents", () => {
//   let wrapper: any;
//   beforeEach(() => {
//     wrapper = setup();
//   });
  test("component renders OK", () => {
    let wrapper: any  = setup()
    const component = findByTestAttr(wrapper, "view-content-home");
    expect(component.length).toBe(1);
  });
//   test("component renders message, if no news supplied", () => {
//     const component = findByTestAttr(wrapper, "message-documents");
//     expect(component.text().length).not.toBe(0);
//   });
// });

// test("component renders documents, if supplied", () => {
//   const wrapper = setup(defaultProps);
//   const componentsNodes = findByTestAttr(wrapper, "component-document-card");
//   expect(componentsNodes.length).toBe(
//     Object.keys(defaultProps.documents).length
//   );
// });
