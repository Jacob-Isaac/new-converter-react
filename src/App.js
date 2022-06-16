// poprawić stylowanie (nazwy) oraz formatowanie


import "./App.css";
import React from "react";
import Form from "./Form";
import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";
import useCurrencyRates from "./currencyRates.js";

function App() {

  const focus = React.useRef(null);
  const [currentCurrency, setCurrency] = React.useState("PLN");
  const [currentPlaceHolder, setCurrentPlaceHolder] = React.useState(
    "Wpisz ilość Złotych"
  );
  const [inputValue, setInputValue] = React.useState("");
  const [messageValue, setMessageValue] = React.useState(
    "Wybrałeś walutę Złoty (PLN)"
  );
  const {multiplierDollar, multiplierEuro} = useCurrencyRates();
  const [resultValue, setResultValue] = React.useState("=");
  
  const currencyResult = (currentCurrency) => {

    if (currentCurrency === "PLN") {
      displayingResult(currentCurrency, inputValue * multiplierDollar, inputValue * multiplierEuro);
    }
    if (currentCurrency === "USD") {
      displayingResult(currentCurrency, inputValue / multiplierDollar);
    }
    if (currentCurrency === "EUR") {
      displayingResult(currentCurrency, inputValue / multiplierEuro);
    }
  };

  const displayingResult = (currentCurrency, result, resultSecond) => {
    setResultValue(currentCurrency === "PLN"
      ? `= ${result.toFixed(2)} USD \n ↕ \n= ${resultSecond.toFixed(2)} EUR`
      : `= ${result.toFixed(2)} PLN`);
  };

  const onZlotyButtonClick = () => {
    setCurrency("PLN");
    setCurrentPlaceHolder("Wpisz ilość Złotych");
    setInputValue("");
    setMessageValue("Wybrałeś walutę Złoty (PLN)");
    focus.current.focus();
  };

  const onDollarButtonClick = () => {
    setCurrency("USD");
    setCurrentPlaceHolder("Wpisz ilość Dolarów");
    setInputValue("");
    setMessageValue("Wybrałeś walutę Dolar (USD)");
    focus.current.focus();
  };
  const onEuroButtonClick = () => {
    setCurrency("EUR");
    setCurrentPlaceHolder("Wpisz ilość Euro");
    setInputValue("");
    setMessageValue("Wybrałeś walutę Euro (EUR)");
    focus.current.focus();
  };

  return (
    <Container>
      <Header
        onZlotyButtonClick={onZlotyButtonClick}
        onDollarButtonClick={onDollarButtonClick}
        onEuroButtonClick={onEuroButtonClick}
      />
      <Form
        messageValue={messageValue}
        currentPlaceHolder={currentPlaceHolder}
        inputValue={inputValue}
        inputCallback={(event) => setInputValue(event)}
        focus={focus}
        focusCallback={() => focus.current.focus()}
        currentCurrency={currentCurrency}
        currencyResult={currencyResult}
        resultValue={resultValue}
      />
      <Footer />
    </Container>
  );
}

export default App;
