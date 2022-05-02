import "./App.css";
import React, { useCallback } from "react";
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
        onZlotyButtonClick={onZlotyButtonClick}
        onDollarButtonClick={onDollarButtonClick}
        onEuroButtonClick={onEuroButtonClick}
      />
      <Footer />
    </Container>
  );
}

export default App;
