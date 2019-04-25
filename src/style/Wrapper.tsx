import styled from "styled-components";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Rubik:300,300i,400:latin-ext"]
  }
});

const Wrapper = styled.div`
  width: 100%;
  font-family: Rubik;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
`;
export default Wrapper;
