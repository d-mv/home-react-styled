import styled from "styled-components";

import { arsenic, lightGrey } from "./_definitions";

const LogoStyle = styled.div`
  z-index: 101;
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 18px;
  cursor: pointer;
  @media (prefers-color-scheme: dark) {
    background-color: ${arsenic};
    color: ${lightGrey};
    border-bottom: 1px solid grey;
  }
  border-bottom: 1px solid grey;
  background-color: white;
`;
export default LogoStyle;
