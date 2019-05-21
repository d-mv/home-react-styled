import styled from "styled-components";

const MessageStyle = styled.div`
/* background:none; */
`;

const LinesStyle = styled.p`
  margin: 0;
`;
const LineOne = styled(LinesStyle)`
  font-size: 1rem;
  font-weight: 300;
  font-style: italic;
`;
const LineTwo = styled(LinesStyle)`
  font-size: 2rem;
  font-weight: 500;
`;
const LineThree = styled(LinesStyle)`
  font-size: 1.5rem;
  font-weight: 300;
`;
const LineFour = styled(LinesStyle)`
  font-size: 1rem;
  font-weight: 300;
`;

const SendMessageStyle = styled.section`
  font-weight: 300;

  cursor: pointer;
  margin: 10px 0;
  color: #878787;
  &:hover {
    color: black;
  }
`;

export {
  MessageStyle,
  LineOne,
  LineTwo,
  LineThree,
  LineFour,
  SendMessageStyle
};
