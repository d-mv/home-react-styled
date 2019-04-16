import styled from "styled-components";

const PhotosBelt = styled.section`
  @keyframes slideInFromBottom {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }
  position: absolute;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  animation: 1s ease-out 0s 1 slideInFromBottom;
  transition: 1s;
  @media (max-width: 499px) {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 10%;
    height: 15%;
  }
  @media (min-width: 500px) {
    width: 90%;
    left: 0;
    right: 40px;
    bottom: 20px;
    height: 110px;
    margin: 0 auto;
  }
`;
export default PhotosBelt;
