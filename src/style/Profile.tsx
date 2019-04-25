import styled from "styled-components";

const Profile = styled.section`
  @media (max-width: 699px) {
    grid-area: alpha;
    align-self: center;
    justify-self: end;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    word-wrap: normal;
  }
  @media (min-width: 700px) {
    grid-area: alpha;
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
