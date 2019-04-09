import styled from "styled-components";

const Grid = styled.div`
  padding: 20px 0;

  @media (max-width: 350px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
    text-align: center;
    width: 100vw;
    margin: 0;
  }
  @media (min-width: 351px) and (max-width: 699px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
    text-align: center;
    width: 100vw;
    margin: 0 auto;
  }
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas: "message photo";
    grid-column-gap: 3rem;
    width: 90%;
    height: 100%;
    margin: 0 auto;
    align-content: center;
  }
`;

export default Grid;
