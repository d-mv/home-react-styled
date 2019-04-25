import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/modules";

import "../../test/setupTest";

import ContactsWrapper from "./ContactsWrapper";

// const icon = (props: {icon: string}) => {
//   const title = `component-test-icon-${props.icon}`
//   return (
//   <div data-test={title}>{props.icon}</div>
//   )}

const testData = {
  contacts: [
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
  // const dataTestId = `component-test-icon-${props.contacts[0]icon}`;
  return shallow(<ContactsWrapper {...props} />);
};

test("component renders OK without documents", () => {
  let wrapper: any = setup();
  const component = findByTestAttr(wrapper, "component-contacts");
  expect(component.length).toBe(0);
});

test("component renders icons, if supplied", () => {
  const wrapper = setup(testData);
  const componentsNodes = findByTestAttr(wrapper, "component-contact");
  expect(componentsNodes.length).toBe(
    Object.keys(testData.contacts).length
  );
});
