import "./App.css";
import React from "react";
import Form from "./Form";
import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";
import useConverter from "./useConverter.js";

function App() {
  const {
    inputValue,
    focus,
    currentCurrency,
    currentPlaceHolder,
    messageValue,
    resultValue,
    inputCallback,
    currencyResult,
    onZlotyButtonClick,
    onDollarButtonClick,
    onEuroButtonClick,
  } = useConverter();

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
        inputCallback={inputCallback}
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
