import React from "react";
import "./style.css";



const Form = ({currentPlaceHolder, inputValue, inputCallback, messageValue, focus, focusCallback}) => {

    const onFormSubmit = (event) => {
        event.preventDefault();
        inputCallback("");
        focusCallback();
        // const resultDisplay = document.querySelector(".js-formProps__result");
        // currencyMultipliervalue(currentCurrency);
        // currencyResult(currentCurrency);
        // displayingResult(resultDisplay);
        // resultTextSize(currency);
      };

return (

<form onSubmit={onFormSubmit} className="allBoxesProperties">
        <p name= "text" className="formProps">{messageValue}</p>
        <p className="formProps__inputSection">
          <label>* 
<input 
autoFocus
ref={focus}
name= "input"
id= "focus"
className="formProps__input"
value = {inputValue}
onChange = {(event) => inputCallback(event.target.value)}
type="number" 
min="1"
max="9999999999" 
placeholder={currentPlaceHolder} 
step="0.01"
required></input>
          </label>
        </p>
        <p className="formProps">
          <button className="formProps__resultButton">WYLICZ !</button>
        </p>
        <p id="" className="formProps formProps__textProps"></p>
        <p>Według średniego kursu NBP z dn. 01.02.2022</p>
      </form>
)
};

export default Form;