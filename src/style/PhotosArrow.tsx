import styled from "styled-components";

interface IProps {
  degree: number;
}

const PhotosArrow = styled.button<IProps>`
  background: none;
  border: none;
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.2);
  align-self: center;
  transition: 0.7s;
  transform: rotate(${props => props.degree}deg);
  padding: {
    top: 10px;
    bottom: 10px;
    left: 5px;
    right: 5px;
  }
  @media (min-width: 500px) {
    &:hover {
      transform: scale(1.2) rotate(${props => props.degree}deg);
      text-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    }
  }
`;
export default PhotosArrow;
