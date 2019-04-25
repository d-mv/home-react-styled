import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/modules";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";

import "../../test/setupTest";

import ContactItem from "./ContactItem";

// const icon = (props: {icon: string}) => {
//   const title = `component-test-icon-${props.icon}`
//   return (
//   <div data-test={title}>{props.icon}</div>
//   )}

const defaultProps = {contact:{
  icon: "FaGithubAlt",
  description: "This is GitHub",
  link: "https://www.github.io"}
};

/**
 * Functional React component for congrats message
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = (props: any = {}) => {
  // const dataTestId = `component-test-icon-${props.contacts[0]icon}`;
  return shallow(<ContactItem {...props} />);
};

test("component doesn't render anything without data", () => {
  const component = findByTestAttr(setup(), "component-contact");
  expect(component.length).toBe(0);
});

describe("component works fine when supplied data", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = setup(defaultProps);
  });
  test("component renders icon", () => {
    const iconTag = `component-contact-${defaultProps.contact.icon.toLowerCase()}`;
    const componentsNodes = findByTestAttr(wrapper, iconTag);
    expect(componentsNodes.length).toBe(1);
  });

  test("component renders description", () => {
    const componentsNode = findByTestAttr(wrapper, "component-contact-description");
    expect(componentsNode.text()).toBe(defaultProps.contact.description);
  })

  // test("component supplies workable click", () => {
  //   const componentsNodes = findByTestAttr(wrapper, "component-contact");
  //   expect(componentsNodes.length).toBe(1);
  // });
});
