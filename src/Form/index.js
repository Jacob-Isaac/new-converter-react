import "./style.css";

const Form = () => (
<form className="allBoxesProperties">
        <p className="js-formProps formProps"> Wybrałeś walutę Złoty (PLN)</p>
        <p className="formProps__inputSection">
          <label>*
<input autofocus
name="input"
className="js-formProps__input formProps__input js-formProps__inputt"
type="number" 
min="1"
max="9999999999" 
placeholder="Wpisz ilość złotych" 
step="0.01"
required></input>
          </label>
        </p>
        <p className="formProps">
          <button className="js-resultbutton formProps__resultButton">WYLICZ !</button>
        </p>
        <p id="js-resultTextSize" className="js-formProps__result formProps formProps__textProps"></p>
        <p>Według średniego kursu NBP z dn. 01.02.2022</p>
      </form>
);

export default Form;