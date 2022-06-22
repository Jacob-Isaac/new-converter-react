import React from "react";
import {
  Link,
  LinkText,
  ListStyle,
  CopyRight,
  Contact,
  Properties,
  Img,
} from "./styled.js";

const Footer = () => {
  const [visitedMail, setVisitedMail] = React.useState(false);
  const visitedMailAdress = () => {
    setVisitedMail(true);
  };
  const [visitedTel, setVisitedTel] = React.useState(false);
  const visitedTelephone = () => {
    setVisitedTel(true);
  };

  return (
    <Properties id="contact">
      <Contact>
        <ListStyle>Dane kontaktowe:</ListStyle>
        <ListStyle>Jakub Nowakowski</ListStyle>
        <ListStyle>
          e-mail:
          <Link
            onClick={visitedMailAdress}
            visitedM={visitedMail}
            href="mailto:jacob.69.isaac@gmail.com"
          >
            <LinkText>jacob.69.isaac@gmail.com</LinkText>
          </Link>
        </ListStyle>
        <ListStyle>
          tel:
          <Link
            onClick={visitedTelephone}
            visitedT={visitedTel}
            href="tel:+48.666(666)666"
          >
            <LinkText>+48 666-666-666</LinkText>
          </Link>
        </ListStyle>
        <ListStyle>
          <Link
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.facebook.com/nowakowski.malarstwo"
            title="Otwórz w nowej karcie"
          >
            <Img
              // src={require('./facebook.png')} - inny sposób na implementacje img
              alt="Jakub Nowakowski"
            />
          </Link>
        </ListStyle>
      </Contact>
      <CopyRight>
        ©Copyright 2022 by Jakub Nowakowski - wszystkie prawa zastrzeżone
      </CopyRight>
    </Properties>
  );
};

export default Footer;
