import React from "react";

import Content from "../style/Content";
import { Grid } from "../style/Grid";
import Profile from "../style/Profile";
import Message from "../components/Message";
import SendMessage from "../components/SendMessage";
import Photo from "../style/Photo";

const Home = () => {
  return (
    <Content data-test="view-content-home">
      <Grid data-test="style-grid">
        <Profile data-test="style-profile">
          <Message data-test="component-message" />
          <SendMessage data-test="component-send-message" />
        </Profile>
        <Photo data-test="style-image">
          <img
            src="https://res.cloudinary.com/diciu4xpu/image/upload/v1552251001/home/avatar_photo.jpg"
            alt="Dmitry\'s avatar"
          />
        </Photo>
      </Grid>
    </Content>
  );
}

export default Home;
