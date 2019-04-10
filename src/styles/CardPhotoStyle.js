import styled from "styled-components";

const CardPhotoStyle = styled.section`
  grid-area: photo;
  height: 250px;
  background: rgba(0, 0, 0, 0) url(${props => props.image}) no-repeat scroll
    center center / cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  object-fit: cover;
  height: 250px;
  width: 300px;
  border-radius: 3px 3px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: flex-end;
`;
export default CardPhotoStyle;
