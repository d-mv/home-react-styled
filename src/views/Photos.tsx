import React, { useState } from "react";

import PhotosBelt from "../containers/PhotosBelt";

import Content from "../style/Content";
import PhotosMain from "../style/PhotosMain";
import {
  PhotosMainTitle,
  PhotosMainTitleOne,
  PhotosMainTitleTwo
} from "../style/PhotosMainTitle";

const Photos = (Photos: {
  data: {
    [index: string]: {
      title: string;
      location: string;
      large: string;
      thumb: string;
    };
  };
}) => {
  const [mainPhoto, setPhoto] = useState(Photos.data["1"]);
  return (
    <Content data-test="view-content-photos">
      <PhotosMain photo={mainPhoto.large} data-test="style-photo-main">
        <PhotosMainTitle data-test="style-photo-title">
          <PhotosMainTitleOne>{mainPhoto.title}</PhotosMainTitleOne>
          <PhotosMainTitleTwo>{mainPhoto.location}</PhotosMainTitleTwo>
        </PhotosMainTitle>
      </PhotosMain>
      <PhotosBelt
        choosePhoto={setPhoto}
        photos={Photos.data}
        data-test="container-photo-belt"
      />
    </Content>
  );
};
export default Photos;
