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
    "Wybrałeś walutę Złoty (PLN)"
  );
  const [inputValue, setInputValue] = React.useState("");
  const [messageValue, setMessageValue] = React.useState(
    "Wybrałeś walutę Złoty (PLN)"
  );
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
    }
    if (currentCurrency === "USD" || currentCurrency === "EUR") {
      setResult(inputValue * multiplier);
    };
    displayingResult(currentCurrency, result, resultSecond);
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
  const przycisk = () => {
 console.log(currentCurrency);
 console.log(result);
 console.log(resultSecond);
 console.log(resultValue);
  };




  return (
    <Container>
      <Header
        onZlotyButtonClick={onZlotyButtonClick}
        onDollarButtonClick={onDollarButtonClick}
        onEuroButtonClick={onEuroButtonClick}
        przycisk={przycisk}
      />
      <Form
        messageValue={messageValue}
        currentPlaceHolder={currentPlaceHolder}
        inputValue={inputValue}
        inputCallback={(event) => setInputValue(event)}
        focus={focus}
        focusCallback={() => focus.current.focus()}
        onZlotyButtonClick={onZlotyButtonClick}
        onDollarButtonClick={onDollarButtonClick}
        onEuroButtonClick={onEuroButtonClick}
        currentCurrency={currentCurrency}
        currencyMultiplierValue={currencyMultiplierValue}
        resultValue={resultValue}
      />
      <Footer />
    </Container>
  );
}

export default App;
