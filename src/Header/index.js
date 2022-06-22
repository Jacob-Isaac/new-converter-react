import {
  Navigation,
  NavigationLinks,
  LogoImg,
} from "./styled.js";

const Header = ({
  onZlotyButtonClick,
  onDollarButtonClick,
  onEuroButtonClick,
}) => (
  <header>
    <Navigation>
      <LogoImg alt="logo" width="100" height="40" />
      <NavigationLinks onClick={onZlotyButtonClick}>
        <span>Złoty polski (PLN)</span>
      </NavigationLinks>
      <NavigationLinks onClick={onEuroButtonClick}>
        <span>Euro (EUR)</span>
      </NavigationLinks>
      <NavigationLinks onClick={onDollarButtonClick}>
        <span>Dolar amerykański (USD)</span>
      </NavigationLinks>
    </Navigation>
  </header>
);

export default Header;
