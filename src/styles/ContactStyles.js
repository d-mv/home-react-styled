import styled from "styled-components";

const ContactIcons = styled.div`
  grid-area: alpha;
  text-align: right;
`;
const ContactTexts = styled.div`
  grid-area: beta;
  font-weight: 300;
`;
const ContactIcon = styled.div`
  line-height: 2.5rem;
  vertical-align: center;
  font-size: 2rem;
  cursor:pointer;
`;
const ContactText = styled.div`
  font-size: 1rem;
  line-height: 2.5rem;
    cursor:pointer;
`;

export { ContactIcons, ContactTexts, ContactIcon, ContactText };
