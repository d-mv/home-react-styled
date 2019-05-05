import styled from "styled-components";

import { scaleUp } from "./_animations";
import {
  arsenic,
  darkMediumGrey,
  boxShadow,
  boxTransition,
  boxShadowHover
} from "./_definitions";

const ProjectCard = styled.section`
  animation: ${scaleUp} 1s steps(200, start);
  border-radius: 3px;
  transition-duration: 0.5s;
  width: 300px;
  height: max-content;
  margin: 10px;
  @media (prefers-color-scheme: dark) {
    background-color: ${darkMediumGrey};
    color: ${arsenic};
  }
  background-color: #ececec;
  box-shadow: ${boxShadow};
  transition: ${boxTransition};
  &:hover {
    box-shadow: ${boxShadowHover};
  }
`;

export default ProjectCard;
