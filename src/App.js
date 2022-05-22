import "./App.css";
import React from "react";
import Form from "./Form";
import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";

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
  const dividerEuro = 4.7;
  const dividerDollar = 4.28;
  const [multiplier, setMultiplier] = React.useState(4.28);
  const [resultValue, setResultValue] = React.useState("=");


  const currencyResult = (currentCurrency) => {

    if (currentCurrency === "PLN") {
      displayingResult(currentCurrency, inputValue / dividerDollar, inputValue / dividerEuro);
    }
    if (currentCurrency === "USD") {
      displayingResult(currentCurrency, inputValue * multiplier);
    }
    if (currentCurrency === "EUR") {
      displayingResult(currentCurrency, inputValue * multiplier);
    }
  };

  const displayingResult = (currentCurrency, result, resultSecond) => {
    setResultValue(currentCurrency === "PLN"
      ? `= ${result.toFixed(2)} USD \n lub = ${resultSecond.toFixed(2)} EUR`
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
    setMultiplier(4.28)
    setCurrentPlaceHolder("Wpisz ilość Dolarów");
    setInputValue("");
    setMessageValue("Wybrałeś walutę Dolar (USD)");
    focus.current.focus();
  };
  const onEuroButtonClick = () => {
    setCurrency("EUR");
    setMultiplier(4.7)
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
