import styled from "styled-components";

export const FormText = styled.p` 
  margin-bottom: 30px;
`;

export const FormResult = styled.p` 
 margin-bottom: 30px;
  margin-top: 5%;

  @media (min-width: 800px) {
    font-size: 30px;
}
`;
export const FormInput = styled.input` 
   width: 40%;
  border-radius: 5px;

  @media (max-width: 450px) {
    width: 100px;
    font-size: 10px;
}
`;

export const FormButton = styled.button` 
    transition: all 0.3s ease-in-out;

    @media (max-width: 800px) {
    transform: scale(1.8); 
  }
  @media (min-width: 800px) {
  &:hover {
  cursor: pointer;
   transform: scale(1.1); 
 } 
}
`;
