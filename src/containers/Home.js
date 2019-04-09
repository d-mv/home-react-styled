import React from "react";

import Content from "../styles/Content";
import Grid from "../styles/Grid";
import Profile from "../styles/Profile";
import Message from "../components/Message";
import SendMessage from "../components/SendMessage";
import Photo from "../styles/Photo";

export default function Home() {
  return (
    <Content id="content">
      <Grid id="grid">
        <Profile>
          <Message />
          <SendMessage />
        </Profile>
        <Photo>
          <img src="/avatar_photo.jpg" alt="Dmitry\'s avatar" />
        </Photo>
      </Grid>
    </Content>
  );
}
