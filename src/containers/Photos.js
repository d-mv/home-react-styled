import React, { useState } from "react";
import data from "../data/data.json";

import Content from "../styles/Content";
import PhotosMain from "../styles/PhotosMain";
import {
  PhotosMainTitle,
  PhotosMainTitleLineOne,
  PhotosMainTitleLineTwo
} from "../styles/PhotosMainTitle";
import PhotosBelt from "./PhotosBelt";

export default function Photos() {
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
