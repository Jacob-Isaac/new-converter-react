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
}) => {

  const [result, setResult] = React.useState(0);
  const [resultSecond, setResultSecond] = React.useState(0);
  const dividerEuro = 4.7;
  const dividerDollar = 4.28;
  const [multiplier, setMultiplier] = React.useState(4.28);
  const [resultValue, setResultValue] = React.useState(0);

  const currencyMultiplierValue = (currentCurrency) => {
    switch (currentCurrency) {
      case "USD":
        setMultiplier(4.28);
        break;
      case "EUR":
        setMultiplier(4.7);
        break;
      default:
        break;
    }
    currencyResult(currentCurrency);
  };
  const currencyResult = (currentCurrency) => {
    if (currentCurrency === "PLN") {
     setResult(inputValue / dividerDollar);
    setResultSecond(inputValue / dividerEuro);
     console.log(result);
     console.log(resultSecond);
    }
    if (currentCurrency === "USD" || currentCurrency === "EUR") {
      setResult(inputValue * multiplier);
      console.log(result);
    };
    displayingResult();
  };
  const displayingResult = () => {
    setResultValue(currentCurrency === "PLN"
    ? `= ${result.toFixed(2)} USD \n lub = ${resultSecond.toFixed(2)} EUR`
    : `= ${result.toFixed(2)} PLN`);
    console.log(resultValue);
    };  

  function onFormSubmit(event) {
        event.preventDefault();
        currencyMultiplierValue(currentCurrency);
        //
        inputCallback("");
        focusCallback();
        // console.log(currentCurrency);
        // console.log(dividerEuro);
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
