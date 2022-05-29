
import "./colorChange.css"
import React from "react";
import { Link, LinkText, ListStyle, CopyRight, Contact, Properties, Img } from "./styled.js";




const Footer = () => {

  const [visitedLink, setVisitedLink] = React.useState(false);
  const visited = () => {
    setVisitedLink(true);
  };
  const [secondVisitedLink, setSecondVisitedLink] = React.useState(false);
  const secondVisited = () => {
    setSecondVisitedLink(true);
  };


  return (
    <Properties id="contact">
      <Contact>
        <ListStyle>Dane kontaktowe:</ListStyle>
        <ListStyle>Jakub Nowakowski</ListStyle>
        <ListStyle>
          e-mail:
          <Link
            onClick={visited}
            className={`${visitedLink === true
              ? "black"
              : "blue"
              }`}
            href="mailto:jacob.69.isaac@gmail.com"
          >
            <LinkText>jacob.69.isaac@gmail.com</LinkText>
          </Link>

        </ListStyle>
        <ListStyle>
          tel:
          <Link 
            onClick={secondVisited}
            className={`${secondVisitedLink === true
              ? "black"
              : "blue"
              }`}
            href="tel:+48.666(666)666"><LinkText>+48 666-666-666</LinkText></Link>
        </ListStyle>
        <ListStyle>

          <Link
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.facebook.com/nowakowski.malarstwo"
            title="Otwórz w nowej karcie">
            <Img
              className="footerBox__decoration--textBorder"
              src={require('./facebook.png')}
              alt="Jakub Nowakowski"
            />
          </Link>
        </ListStyle>
      </Contact>
      <CopyRight>
        ©Copyright 2022 by Jakub Nowakowski - wszystkie prawa zastrzeżone
      </CopyRight>
    </Properties>
  )
};

export default Footer;