import React from "react";

import PhotosArrow from "../styles/PhotosArrow";

const handleClick = props => {
  props[0](props[1]);
};

const Arrow = props => {
  let degree = 0;
  let direction = "left";
  if (props.right) {
    degree = 180;
    direction = "right";
  }
  return (
    <PhotosArrow degree={degree}>
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
        onClick={handleClick.bind(this, [props.click, direction])}
      >
        <path
          d="M204.613,236.326L84.372,140.796L204.613,45.266"
          fill="none"
          stroke="rgba(0, 0, 0, 0.2)"
          strokeWidth="31.62"
          transform="matrix(.0857 0 0 .15702 -5.23 -5.108)"
        />
      </svg>
    </PhotosArrow>
  );
};

export default Arrow;
