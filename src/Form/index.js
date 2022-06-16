import React from "react";
import useCurrentDate from "./useCurrentDate";
import useCurrencyRates from "../currencyRates";
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';
import { FormResult, FormText, FormButton, FormInput, Error } from "./styled.js";
import { CenterBoxProperties } from "../styled.js";


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

  const date = useCurrentDate();
  let formatedDate = `${date.toLocaleTimeString()}`;

  const WeekDay = () => format(new Date(), "'Dzisiaj jest' eeee", { locale: pl });

  const {messageFromApi} = useCurrencyRates();
let content = "";

switch (messageFromApi) {

  case "loading":
    content = <p>Ładowanie</p>
    break;

    case "ok":
      content =  <><FormText dateText name="text"><WeekDay/>, godzina: {formatedDate}</FormText>
      <FormText name="text">
        {messageValue}
      </FormText>
      <p>
        <label>
          *&nbsp;&nbsp;
          <FormInput
            autoFocus
            ref={focus}
            name="input"
            value={inputValue}
            onChange={(event) => inputCallback(event.target.value)}
            type="number"
            min="1"
            max="9999999999"
            placeholder={currentPlaceHolder}
            step="0.01"
            required
          ></FormInput>
        </label>
      </p>
      <FormText>
        <FormButton>WYLICZ !</FormButton>
      </FormText>
      <FormResult style={{
      'white-space': 'pre-wrap'
      }} id="TU JEST WYNIK">{resultValue}</FormResult> 
      <p>Według średniego kursu NBP z dn. 01.02.2022</p>
      </>
    break;

    default:
      content = 
        <Error>
        SERWER NIEOSIĄGALNY
        <br/><br/>
        Być może nie masz dostępu do internetu, lub baza danych dla walut jest 'offline'
        <br/><br/>
        spróbuj później
        </Error>; 
}

  function onFormSubmit(event) {
    event.preventDefault();
    currencyResult(currentCurrency);
    focusCallback();
  }

  return (

    <CenterBoxProperties onSubmit={onFormSubmit}>
     {content}
    </CenterBoxProperties>
  );
};

export default Form;
