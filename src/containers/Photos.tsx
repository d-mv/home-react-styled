import React, { useState } from "react";
import data from "../data/data.json";

import Content from "../style/Content";
import PhotosMain from "../style/PhotosMain";
import {
  PhotosMainTitle,
  PhotosMainTitleLineOne,
  PhotosMainTitleLineTwo
} from "../style/PhotosMainTitle";
import PhotosBelt from "./PhotosBelt";

const Photos = () => {
  const [photo, setPhoto] = useState(data.photos[1]);

  return (
    <Content id="content">
      <PhotosMain id="photos-main" photo={photo.large}>
        <PhotosMainTitle id="photos-main-title">
          <PhotosMainTitleLineOne>{photo.title}</PhotosMainTitleLineOne>
          <PhotosMainTitleLineTwo>{photo.location}</PhotosMainTitleLineTwo>
        </PhotosMainTitle>
      </PhotosMain>
      <PhotosBelt choosePhoto={setPhoto} photos={data.photos} />
    </Content>
  );
}
export default Photos