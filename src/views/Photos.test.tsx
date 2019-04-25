import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/modules";
import "../../test/setupTest";

import Photos from "./Photos";

const testData = {
  data: {
    "1": {
      title: "Title #1",
      location: "Location #1",
      large: "http://google.com",
      thumb: "http://google.com"
    },
    "2": {
      title: "Title #2",
      location: "Location #2",
      large: "http://google.com",
      thumb: "http://google.com"
    }
  }
};

/**
 * Functional React component for congrats message
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = (props: any = {}) => {
  return shallow(<Photos {...props} />);
};

test("component renders details", () => {
  let wrapper: any = setup(testData);
  const viewPhotos = findByTestAttr(wrapper, "view-content-photos");
  const stylePhotoMain = findByTestAttr(wrapper, "style-photo-main");
  const stylePhotoTitle = findByTestAttr(wrapper, "style-photo-title");
  const contPhotoBelt = findByTestAttr(wrapper, "container-photo-belt");
  expect(viewPhotos.length).toBe(1);
  expect(stylePhotoMain.length).toBe(1);
  expect(stylePhotoTitle.length).toBe(1);
  expect(contPhotoBelt.length).toBe(1);
});
