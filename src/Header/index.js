import "./style.css";

const Header = ({onZlotyButtonClick, onDollarButtonClick, onEuroButtonClick}) => (
<header className="navigation allBoxesProperties">
<button onClick={onZlotyButtonClick} className="navigation__links"
  ><span>Złoty polski (PLN)</span></button>
<button onClick={onDollarButtonClick} className="navigation__links">
  <span>Euro (EUR)</span></button>
<button onClick={onEuroButtonClick} className="navigation__links">
  <span>Dolar amerykański (USD)</span></button>
</header>
);

export default Header;