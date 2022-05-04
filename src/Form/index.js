import React from "react";
import "./style.css";

const Form = ({
  currentPlaceHolder,
  inputValue,
  inputCallback,
  messageValue,
  focus,
  focusCallback,
  currentCurrency,
  currencyMultiplierValue,
  resultValue,
}) => {



  function onFormSubmit(event) {
        event.preventDefault();
        currencyMultiplierValue(currentCurrency);
        //
        // inputCallback("");
        //focusCallback();
        // console.log(currentCurrency);
        // console.log(dividerEguro);
        // console.log(multiplier);
        // console.log(dividerDollar);
        // const resultDisplay = document.querySelector(".js-formProps__result");
        // currencyMultipliervalue(currentCurrency);
        // currencyResult(currentCurrency);
        // displayingResult(resultDisplay);
        // resultTextSize(currency);
    }
// to na dole  musi sie dziac w onZlotyButtonnCLick ogolnie w buttonach !!!!!


  return (
    <form onSubmit={onFormSubmit} className="allBoxesProperties">
      <p name="text" className="formProps">
        {messageValue}
      </p>
      <p className="formProps__inputSection">
        <label>
          *&nbsp;&nbsp;
          <input
            autoFocus
            ref={focus}
            name="input"
            className="formProps__input"
            value={inputValue}
            onChange={(event) => inputCallback(event.target.value)}
            type="number"
            min="1"
            max="9999999999"
            placeholder={currentPlaceHolder}
            step="0.01"
            required
          ></input>
        </label>
      </p>
      <p className="formProps">
        <button className="formProps__resultButton">WYLICZ !</button>
      </p>
      <p id="TU JEST WYNIK" className="formProps formProps__textProps">{resultValue}</p>
      <p>Według średniego kursu NBP z dn. 01.02.2022</p>
    </form>
  );
};

export default Form;
