import React from "react";
import useTime from "./date";
import "./style.css";
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';

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

  const date = useTime();
  let formatedDate = `${date.toLocaleTimeString()}`;

  const WeekDay = () => {
    return format(new Date(), "'Dzisiaj jest' eeee", { locale: pl })
  }

  function onFormSubmit(event) {
    event.preventDefault();
    currencyResult(currentCurrency);
    focusCallback();
  }

  return (

    <form onSubmit={onFormSubmit} className="centerBoxProperties">
      <p name="text" className="formProps"><WeekDay />, godzina: {formatedDate}</p>
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
