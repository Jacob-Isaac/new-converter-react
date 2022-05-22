import "./style.css";

const Header = ({ onZlotyButtonClick, onDollarButtonClick, onEuroButtonClick }) => (
  <header>
    <div className="navigation">

      <button className="navigation__logo"><img alt="logo" src={require('./logo.png')} width="100px"
        height="40px"/></button>
      <button onClick={onZlotyButtonClick} className="navigation__links">
        <span>Złoty polski (PLN)</span></button>
      <button onClick={onEuroButtonClick} className="navigation__links">
        <span>Euro (EUR)</span></button>
      <button onClick={onDollarButtonClick} className="navigation__links">
        <span>Dolar amerykański (USD)</span></button>
    </div>

  </header>

);

export default Header;