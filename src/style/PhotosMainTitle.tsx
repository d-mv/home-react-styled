import styled from "styled-components";

const PhotosMainTitle = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 0;
  @media (min-width: 500px) {
    border-radius: 0 0 3px 3px;
  }
`;

const PhotosMainTitleLines = styled.p`
  margin: 0;
  padding: 5px 10px;
  font-weight: 300;
`;
const PhotosMainTitleLineOne = styled(PhotosMainTitleLines)`
  font-size: 1.5rem;
  font-weight: 300;
`;
const PhotosMainTitleLineTwo = styled(PhotosMainTitleLines)`
  font-size: 1rem;
  font-style: italic;
`;

export { PhotosMainTitle, PhotosMainTitleLineOne, PhotosMainTitleLineTwo };
