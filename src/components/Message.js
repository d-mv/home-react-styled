import React from "react";

import {
  MessageStyle,
  LineOne,
  LineTwo,
  LineThree,
  LineFour
} from "../styles/Message";

const Message = () => {
  return (
    <MessageStyle>
      <LineOne>WELCOME,</LineOne>
      <LineTwo>I'm Dmitry</LineTwo>
      <LineThree>FULL-STACK DEVELOPER</LineThree>
      <LineFour>
        React.js, Vue.js, Ruby, Rails & etc. Learning new, reading sci-fi and
        make photos when free.
      </LineFour>
    </MessageStyle>
  );
};

export default Message;
