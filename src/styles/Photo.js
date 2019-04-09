import styled from "styled-components";

const Photo = styled.div`
  @keyframes growLarge {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  img {
    @media (max-width: 350px) {
      margin: 20px 0;
      align-self: center;
      grid-area: photo;
      width: 100vw;
      box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
    }
    @media (min-width: 351px) {
      align-self: center;
      grid-area: photo;
      width: 20rem;
      border-radius: 3px;
      box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
      animation: 1s ease-out 0s 1 growLarge;
    }
  }
`;

export default Photo;
