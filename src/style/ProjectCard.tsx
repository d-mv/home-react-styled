import styled from "styled-components";

import { scaleUp } from "../animation";

const ProjectCard = styled.section`
  animation: ${scaleUp} 1s steps(200, start);
  border-radius: 3px;
  transition-duration: 0.5s;
  width: 300px;
  height: max-content;
  margin: 10px;
  background-color: #ececec;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export default ProjectCard;
