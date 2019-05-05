import styled from "styled-components";
import WebFont from "webfontloader";

import { arsenic, lightGrey } from "./_definitions";

WebFont.load({
  google: {
    families: ["Rubik:300,300i,400:latin-ext"]
  }
});

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  font-family: Rubik;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  @media (prefers-color-scheme: dark) {
    background-color: ${arsenic};
    color: ${lightGrey};
  }
`;
export default Wrapper;
