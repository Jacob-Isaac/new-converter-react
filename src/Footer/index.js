import "./style.css";

const Footer = () => (
  <footer className="footerBox footerBoxProperties" id="contact">
    <ul className="footerBox__contact">
      <li className="footerBox__listStyle">Dane kontaktowe:</li>
      <li className="footerBox__listStyle">Jakub Nowakowski</li>
      <li className="footerBox__listStyle">
        e-mail:
        <a
          href="mailto:jacob.69.isaac@gmail.com"
          className="footerBox__decoration"
        >
          <span className="footerBox__decoration--textBorder"
          >jacob.69.isaac@gmail.com</span>
        </a>

      </li>
      <li className="footerBox__listStyle">
        tel:
        <a href="tel:+48.666(666)666" className="footerBox__decoration">
          <span className="footerBox__decoration--textBorder"
          >+48 666-666-666</span></a>
      </li>
      <li className="footerBox__listStyle">

        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.facebook.com/nowakowski.malarstwo"
          className="footerBox__decoration"
          title="Otwórz w nowej karcie"
        >
          <img
            className="footerBox__decoration--textBorder"
            src={require('./facebook.png')}
            alt="Jakub Nowakowski"
          /></a>
      </li>
    </ul>
    <p className="footerBox__copyRight">
      ©Copyright 2022 by Jakub Nowakowski - wszystkie prawa zastrzeżone
    </p>
  </footer>
);

export default Footer;