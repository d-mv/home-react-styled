import React from "react";

import { SendMessageStyle } from "../styles/Message";

const message = "{ send message }";

const handleClickMail = () => {
  const messageDetails = {
    email: "d.dash.mv@gmail.com",
    subj: "From your web-site",
    body: "Hi Dmitry,"
  };
  // from url
  const sendMessage = `mailto:${messageDetails.email}?subject=${
    messageDetails.subj
  }&body=${messageDetails.body}`;
  // open default mail client
  window.location.href = sendMessage;
};

const SendMessage = () => {
  return (
    <SendMessageStyle onClick={handleClickMail}>{message}</SendMessageStyle>
  );
};
export default SendMessage;
