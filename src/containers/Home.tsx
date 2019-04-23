import React from "react";

import Content from "../style/Content";
import { Grid } from "../style/Grid";
import Profile from "../style/Profile";
import Message from "../components/Message";
import SendMessage from "../components/SendMessage";
import Photo from "../style/Photo";

export default function Home() {
  return (
    <Content id="content">
      <Grid id="grid">
        <Profile>
          <Message />
          <SendMessage />
        </Profile>
        <Photo>
          <img
            src="https://res.cloudinary.com/diciu4xpu/image/upload/v1552251001/home/avatar_photo.jpg"
            alt="Dmitry\'s avatar"
          />
        </Photo>
      </Grid>
    </Content>
  );
}
