import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/modules";
import "../../test/setupTest";

import Contacts from "./Contacts";

const testData = {
  data: [
    {
      icon: "FaGithubAlt",
      description: "This is GitHub",
      link: "https://www.github.io"
    },
    {
      icon: "FaLinkedinIn",
      description: "This is LinkedIn",
      link: "https://linkedin.com/"
    }
  ]
};

/**
 * Functional React component for congrats message
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = (props: any = {}) => {
  return shallow(<Contacts {...props} />);
};

test("component renders empty div if no data", () => {
  let wrapper: any = setup();
  const component = findByTestAttr(wrapper, "view-content-contacts-empty");
  expect(component.length).toBe(1);
});

test("component renders contacts", () => {
  const wrapper = setup(testData);
  const componentsNodes = findByTestAttr(wrapper, "component-contacts");
  expect(componentsNodes.length).toBe(1);
});
