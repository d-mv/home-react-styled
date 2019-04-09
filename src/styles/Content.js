import styled from "styled-components";

const Content = styled.article`
  position: absolute;
  top: 0;
  @media (max-width: 499px) {
    left: 0;
    right: 0;
    bottom: 0;
  }
  @media (min-width: 500px) {
    position: absolute;
    top: 0;
    left: 50px;
    right: 0;
    bottom: 0;
  }
`;

export default Content;
