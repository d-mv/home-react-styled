import styled from "styled-components";

const Grid = styled.div`
  @media (max-width: 350px) {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
    text-align: center;
    width: 100%;
    margin: 0;
  }
  @media (min-width: 351px) and (max-width: 699px) {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
    text-align: center;
    width: 100%;
    margin: 0 auto;
  }
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas: "alpha beta";
    grid-column-gap: 3rem;
    width: 90%;
    height: 100%;
    margin: 0 auto;
    align-content: center;
  }
`;

const ContactsGrid = styled.div`
  display: grid;
  /* grid-template-rows: auto auto; */
  grid-template-areas: "alpha beta";
  grid-column-gap: 1rem;

  margin: auto;
  align-content: center;
  @media (max-width: 350px) {
    width: 90%;
    grid-template-columns: 1fr 5fr;
  }
  @media (min-width: 351px) and (max-width: 549px) {
    width: 90%;
    grid-template-columns: 1fr 4fr;
  }
  @media (min-width: 559px) and (max-width: 1000px) {
    width: 50%;
    grid-template-columns: 1fr 2fr;
  }
  @media (min-width: 1001px) {
    /* margin-top: 5rem; */
    grid-template-columns: 1fr 3fr;
    width: 50%;
  }
`;

export { Grid, ContactsGrid };
