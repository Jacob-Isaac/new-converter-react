import styled from "styled-components";


export const CenterBoxProperties = styled.form`
    color: rgb(24, 24, 24);
    box-shadow: 5px 5px 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: rgb(255 255 255 / 80%);
    border-radius: 17px;
    align-self: center;
    width: 70%;
    min-width: 250px;
      
  @media (min-width: 800px) {
      width: 750px;
  }
  `;
export const Flex = styled.main`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: space-between;
  `;