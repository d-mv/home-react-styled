import React from "react";

import PhotosArrow from "../style/PhotosArrow";
import { arsenic, lightGrey } from "../style/_definitions";

const handleClick = (func: any, direction: string) => {
  func(direction);
};

const Arrow = (IProps: { right?: boolean; left?: boolean; click: any }) => {
  let degree = 0;
  let direction = "left";
  if (IProps.right) {
    degree = 180;
    direction = "right";
  }
  const testTag = `component-arrow-${direction}`;
  let arrowColor = arsenic;
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    arrowColor = lightGrey;
  }

  return (
    <PhotosArrow degree={degree} data-test={testTag}>
      <svg
        viewBox="0 0 15 34"
        width="15"
        height="25"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="1"
        onClick={() => handleClick(IProps.click, direction)}
      >
        <path
          d="M204.613,236.326L84.372,140.796L204.613,45.266"
          fill="none"
          stroke={arrowColor}
          strokeWidth="31.62"
          transform="matrix(.0857 0 0 .15702 -5.23 -5.108)"
        />
      </svg>
    </PhotosArrow>
  );
};

export default Arrow;
