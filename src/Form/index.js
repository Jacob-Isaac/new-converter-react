import React from "react";
import useTime from "./date";
import "./style.css";

const Form = ({
  currentPlaceHolder,
  inputValue,
  inputCallback,
  messageValue,
  focus,
  focusCallback,
  currentCurrency,
  currencyResult,
  resultValue,
}) => {


  function onFormSubmit(event) {
    event.preventDefault();
    currencyResult(currentCurrency);
    focusCallback();
    // inputCallback("");
  }

  const Clock = () => {
    const date = useTime();
    let formatedDate = `${date.toLocaleTimeString()}`
    return <p name="text" className="formProps">Aktualna godzina: {formatedDate}</p>
  }

  return (
    <form onSubmit={onFormSubmit} className="centerBoxProperties">
    <Clock/>
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
