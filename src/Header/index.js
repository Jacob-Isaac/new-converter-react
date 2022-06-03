
import {Navigation, NavigationLogo, NavigationLinks, LogoImg} from "./styled.js";

const Header = ({ onZlotyButtonClick, onDollarButtonClick, onEuroButtonClick }) => (
  <header>
    <Navigation>

      <NavigationLogo><LogoImg alt="logo" width ="100px" 
        height ="40px"/></NavigationLogo>
      <NavigationLinks onClick={onZlotyButtonClick}>
        <span>Złoty polski (PLN)</span></NavigationLinks>
        <NavigationLinks onClick={onEuroButtonClick}>
        <span>Euro (EUR)</span></NavigationLinks>
        <NavigationLinks onClick={onDollarButtonClick}>
        <span>Dolar amerykański (USD)</span></NavigationLinks>
    </Navigation>
  </header>

);

export default Header;