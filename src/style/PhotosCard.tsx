import styled from "styled-components";

interface IProps {
  photo: string
}
const PhotosCard = styled.section<IProps>`
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
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  @media (max-width: 699px) {
    border-radius: none;
  }
  @media (min-width: 700px) {
    border-radius: 3px;
  }
`;
export default PhotosCard;
