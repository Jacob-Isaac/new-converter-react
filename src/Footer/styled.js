import styled, { css } from "styled-components";
import facebook from "./facebook.png";

const Margins = css`
margin-left: 5px;
margin-bottom: -4px;
`;


export const Link = styled.a` 
  text-decoration: none;
  color: rgb(0, 119, 255);
  ${({visitedM}) => visitedM && css`
  color: rgb(0, 0, 0);
  `}
  ${({visitedT}) => visitedT && css`
  color: rgb(0, 0, 0);
  `}
`;

export const ListStyle = styled.li`
  margin: 5px 0;
  list-style: none;
  display: flex;
  justify-content: center;
`;

export const LinkText = styled.span`
${Margins}
`;

export const Img = styled.img`
${Margins}
content:url("${facebook}");
/* background-image:url("${facebook}"); */
`;

export const CopyRight = styled.p`
font-size: 12px;
${Margins}
`;

export const Contact = styled.ul`
line-height: 1.2;
font-size: 10px;
margin-right: 20px;

@media (max-width: 650px) {
    margin-right: 10%;
}
`;

export const Properties = styled.footer`
text-align: center;
box-shadow: 0.1px 0.1px 10px;
padding-top: 10px;
padding-bottom: 10px;
background-color: rgb(255 255 255 / 80%);
`;
