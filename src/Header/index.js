import "./style.css";
// import Form from "../Form";

const Header = ({onZlotyButtonClick, onDollarButtonClick, onEuroButtonClick, przycisk}) => (
<header className="navigation allBoxesProperties">
<button onClick={onZlotyButtonClick} className="navigation__links"
  ><span>Złoty polski (PLN)</span></button>
<button onClick={onEuroButtonClick} className="navigation__links">
  <span>Euro (EUR)</span></button>
<button onClick={onDollarButtonClick} className="navigation__links">
  <span>Dolar amerykański (USD)</span></button>
  <button onClick={przycisk} className="navigation__links">
  <span>przycisk</span></button>
</header>

);

export default Header;