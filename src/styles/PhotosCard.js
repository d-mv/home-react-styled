import styled from "styled-components";

const PhotosCard = styled.div`
  background: rgba(0, 0, 0, 0) url(${props => props.photo}) no-repeat scroll
    center center / cover;
  background-color: white;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  object-fit: cover;
  width: 15%;
  height: 100%;
  transition: 1s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 699px) {
    border-radius: none;
  }
  @media (min-width: 700px) {
    border-radius: 3px;
  }
`;
export default PhotosCard;
