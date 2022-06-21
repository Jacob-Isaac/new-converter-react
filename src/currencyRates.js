
import React from "react";

const useCurrencyRates = () => {

  const multiplierDollar = JSON.parse(localStorage.getItem("usd"));
  const multiplierEuro= JSON.parse(localStorage.getItem("eur"));
  const [messageFromApi, setMessageFromApi] = React.useState("loading");

  React.useEffect(() => {
    fetch('https://api.xchangerate.host/latest?base=PLN&symbols=EUR,USD,PLN')
    .then(response => response.json())
    .then((response) => {
      const timeout = setTimeout(() => {
        localStorage.setItem("usd", JSON.stringify(response.rates.USD));
        localStorage.setItem("eur", JSON.stringify(response.rates.EUR));
        setMessageFromApi("ok");
       }, 3000);
       return () => clearTimeout(timeout);
    }
    )
    .catch((error) => {
      if (multiplierDollar && multiplierEuro) {
        setMessageFromApi("almostError");
      const timeout = setTimeout(() => {
        console.error("SERVER UNREACHABLE, I'M USING LOCAL DATA", error);
        setMessageFromApi("almostOk");
       }, 8000);
       return () => clearTimeout(timeout);
      }
      else {
        console.error("SERVER UNREACHABLE", error);
        setMessageFromApi("error");
      }
    });
  }, []);

  return { multiplierDollar, multiplierEuro, messageFromApi }
  
};

export default useCurrencyRates;
