// import React from 'react'
import styled from "styled-components";

const NavButton = styled.button`
  font-family: Rubik;
  font-weight: 300;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  background: none;
  @media (max-width: 499px) {
    display: flex;
    padding: 10px;
    margin-bottom: 0;
    transition-duration: 1s;
    font-size: 20px;
  }
  @media (min-width: 500px) {
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 10px 20px;
    margin-top: 30px;
    margin-bottom: ${props => props.margin};
    transform: rotate(-90deg);
    transition: 1s;
    font-size: 20px;
    text-align: center;
    width: 80px;
    &:hover {
      transform: none;
      padding: 30px 30px 20px 80px;
      background-color: rgba(255, 255, 255, 0.9);
    }
    &:focus {
      box-shadow: none;
    }
  }
`;
export default NavButton;
