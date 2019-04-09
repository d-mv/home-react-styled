import styled from "styled-components";

const Profile = styled.div`
  @media (max-width: 699px) {
    grid-area: message;
    align-self: center;
    justify-self: end;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    word-wrap: normal;
  }
  @media (min-width: 700px) {
    grid-area: message;
    padding-left: 40px;
    align-self: center;
    justify-self: end;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    word-wrap: normal;
  }
`;

export default Profile;
