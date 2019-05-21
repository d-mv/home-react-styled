import React, { useState } from "react";

import PhotosBelt from "../style/PhotosBelt";
import PhotosCard from "../style/PhotosCard";
import Arrow from "../components/Arrow";

const Photos = (IProps: { choosePhoto: (arg0: any) => void; photos: { [x: string]: any; }; }) => {
  const [startPhoto, setStartPhoto] = useState(1);

  const choosePhoto = (photo:string) => {
    IProps.choosePhoto(photo);
  };

  const handleClick = (direction:string) => {
    const size = Object.keys(IProps.photos).length;
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
      <Arrow left click={()=>handleClick('left')} />
      {Object.keys(IProps.photos).map((photo_id:any)=> {
        if (photo_id >= startPhoto && photo_id <= startPhoto + 4) {
          return (
            <PhotosCard
              id="photos-belt-card"
              key={photo_id}
              photo={IProps.photos[photo_id].thumb}
              onClick={()=>choosePhoto(IProps.photos[photo_id])}
            />
          );
        }
        return null;
      })}
      <Arrow right click={()=>handleClick('right')} />
    </PhotosBelt>
  );
};

export default Photos;
