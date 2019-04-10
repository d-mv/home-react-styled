import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import data from "../data/data.json";

import Content from "../styles/Content";
import PhotosMain from "../styles/PhotosMain";
import {
  PhotosMainTitle,
  PhotosMainTitleLineOne,
  PhotosMainTitleLineTwo
} from "../styles/PhotosMainTitle";
import PhotosBelt from "../styles/PhotosBelt";
import PhotosCard from "../styles/PhotosCard";
import PhotosArrow from "../styles/PhotosArrow";

export default function Photos() {
  const [photo, setPhoto] = useState(data.photos[1]);
  const [startPhoto, setStartPhoto] = useState(1);

  const choosePhoto = photo => {
    setPhoto(photo);
  };

  const handleClick = direction => {
    const size = Object.keys(data.photos).length;
    switch (direction) {
      case "left":
        if (startPhoto > 1) {
          setStartPhoto(startPhoto - 1);
        }
        break;
      case "right":
        if (startPhoto < size - 4) {
          setStartPhoto(startPhoto + 1);
        }
        break;
      default:
        break;
    }
  };

  return (
    <Content id="content">
      <PhotosMain id="photos-main" photo={photo.large}>
        <PhotosMainTitle id="photos-main-title">
          <PhotosMainTitleLineOne>{photo.title}</PhotosMainTitleLineOne>
          <PhotosMainTitleLineTwo>{photo.location}</PhotosMainTitleLineTwo>
        </PhotosMainTitle>
      </PhotosMain>
      <PhotosBelt id="photos-belt">
        <PhotosArrow id="photos-arrow-left">
          <FaAngleLeft onClick={handleClick.bind(this, "left")} />
        </PhotosArrow>
        {Object.keys(data.photos).map(photo_id => {
          if (photo_id >= startPhoto && photo_id <= startPhoto + 4) {
            return (
              <PhotosCard
                id="photos-belt-card"
                key={photo_id}
                photo={data.photos[photo_id].thumb}
                onClick={choosePhoto.bind(this, data.photos[photo_id])}
              />
            );
          }
          return null;
        })}
        <PhotosArrow id="photos-arrow-right">
          <FaAngleRight onClick={handleClick.bind(this, "right")} />
        </PhotosArrow>
      </PhotosBelt>
    </Content>
  );
}

// export default function Projects() {
//   return (
//     <Content>
//       <ProjectCards>
//         {Object.keys(data.projects).map(project_id => {
//           return (
//             <Project key={project_id} project={data.projects[project_id]} icons={data.technology}/>
//           );
//         })}
//       </ProjectCards>
//     </Content>
//   );
// }
