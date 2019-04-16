import React, { useState } from "react";

import PhotosBelt from "../styles/PhotosBeltStyle";
import PhotosCard from "../styles/PhotosCard";
import Arrow from "../components/Arrow";

const Photos = props => {
  const [startPhoto, setStartPhoto] = useState(1);

  const choosePhoto = photo => {
    props.choosePhoto(photo);
  };

  const handleClick = direction => {
    console.log(props.photos);
    const size = Object.keys(props.photos).length;
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
    <PhotosBelt id="photos-belt">
      <Arrow left click={handleClick.bind(this)} />
      {Object.keys(props.photos).map(photo_id => {
        if (photo_id >= startPhoto && photo_id <= startPhoto + 4) {
          return (
            <PhotosCard
              id="photos-belt-card"
              key={photo_id}
              photo={props.photos[photo_id].thumb}
              onClick={choosePhoto.bind(this, props.photos[photo_id])}
            />
          );
        }
        return null;
      })}
      <Arrow right click={handleClick.bind(this)} />
    </PhotosBelt>
  );
};

export default Photos;
