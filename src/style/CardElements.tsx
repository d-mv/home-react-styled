import styled from "styled-components";

const CardLinksStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  padding: 10px;
`;

const CardLinkStyle = styled.div`
  font-size: 0.8rem;
  font-style: italic;
  color: #878787;
  &:hover {
    color: black;
  }
  cursor: pointer;
`;
const CardDescriptionStyle = styled.div`
  grid-area: details;
  padding: 10px;
  font-weight: 300;
`;

interface IProps {
  image: string;
}

const CardPhotoStyle = styled.div<IProps>`
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

const CardTechIconsWrapper = styled.div`
  grid-area: logos;
  display: flex;
  flex-direction: row;
  justify-content: left;
  padding: 0 5px;
`;

const CardTechIconStyle = styled.div`
  img {
    height: 20px;
    margin: 0 5px;
  }
`;

const CardTitleLineOne = styled.div`
  padding: 5px 10px;
  font-size: 1.5rem;
  font-weight: 300;
`;

const CardTitleLineTwo = styled.div`
  padding: 5px 10px;
  font-size: 1rem;
  font-style: italic;
`;

const CardTitleWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 0;
  border-bottom: 2px solid grey;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
`;

export {
  CardTechIconStyle,
  CardTechIconsWrapper,
  CardPhotoStyle,
  CardDescriptionStyle,
  CardLinksStyle,
  CardLinkStyle,
  CardTitleWrapper,
  CardTitleLineOne,
  CardTitleLineTwo
};
