import styled from "styled-components";

import { growLarge } from "./_animations";

const Photo = styled.section`
  img {
    @media (max-width: 350px) {
      margin: 20px 0;
      align-self: center;
      grid-area: beta;
      width: 100vw;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }
    @media (min-width: 351px) {
      align-self: center;
      grid-area: beta;
      width: 20rem;
      border-radius: 3px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      animation: 0.7s ease-out 0s 1 ${growLarge};
    }
  }
`;

export default Photo;
