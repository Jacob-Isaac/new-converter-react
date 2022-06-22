import styled from "styled-components";
import logo from "./logo.png";

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0.1px 0.1px 10px;
  background-color: rgb(255 255 255 / 80%);
  width: 100%;
  min-width: 250px;

  @media (max-width: 968px) {
    box-shadow: 5px 5px 10px;
    background-color: rgb(255 255 255 / 80%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const LogoImg = styled.img`
  content: url("${logo}");
`;

export const NavigationLinks = styled.button`
  background-color: transparent;
  border: none;
  margin: 20px;
  padding: 15px;
  font-family: "Montserrat", cursive, sans-serif;
  text-decoration: none;
  color: black;
  font-weight: bolder;
  transition: all 0.01s ease-in-out;

  &:hover {
    color: rgb(158, 158, 158);
    cursor: pointer;
  }
  &:active {
    color: rgb(158, 158, 158);
    transform: scale(0.8);
  }
`;
