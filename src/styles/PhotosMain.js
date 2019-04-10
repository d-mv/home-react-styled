import styled from "styled-components";

const PhotosMain = styled.section`
  background: rgba(0, 0, 0, 0) url(${props => props.photo}) no-repeat scroll
    center center / cover;
  object-fit: cover;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: flex-end;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
  animation: 1s ease-out 0s 1 growLarge;
  transition: 1s;
  @media (max-width: 499px) {
    top: 80px;
    left: 0;
    right: 0;
    height: 60%;
  }
  @media (min-width: 500px) {
    top: 30px;
    left: 0;
    width: 90%;
    margin: 0 auto;
    right: 40px;
    bottom: 150px;
    border-radius: 3px;
  }
`;
export default PhotosMain;
