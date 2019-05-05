import styled from "styled-components";

import { arsenic, lightGrey } from "./_definitions";

const Content = styled.main`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  @media (prefers-color-scheme: dark) {
    background-color: ${arsenic};
    color: ${lightGrey};
  }
  @media (max-width: 499px) {
    left: 0;
  }
  @media (min-width: 500px) {
    position: absolute;
    left: 50px;
  }
`;
export default Content;
