
import React from "react";

const useCurrencyRates = () => {

  const [multiplierDollar, setMultiplierDollar] = React.useState();
  const [multiplierEuro, setMultiplierEuro] = React.useState();
  const [messageFromApi, setMessageFromApi] = React.useState("loading");
 

  React.useEffect(() => {

    fetch('https://api.exchangerate.host/latest?base=PLN&symbols=EUR,USD,PLN')
    .then(response => response.json())
    .then((response) => {
      const timeout = setTimeout(() => {
        setMultiplierDollar(response.rates.USD);
        setMultiplierEuro(response.rates.EUR);
        setMessageFromApi("ok");
      }, 3000);
  
      return () => clearTimeout(timeout);

    })
    .catch((error) => {
      console.error("SERVER UNREACHABLE", error);
      setMessageFromApi("error");
      //set resultValue = "SERWER NIEOSIĄGALNY - Być może nie masz dostępu do internetu, lub baza danych dla walut jest Offline - spróbuj później"
      // zrobić onload i wrzucić to do innego pliku bo musi zrobic edit całego forma - być może użyć szblonu do forma i pozmieniać konkretne wartości, wtedy trzeba zmienić wszystko w form w app.js
      //konwersja z api do json
    });
    
  }, []);

  return { multiplierDollar, multiplierEuro, messageFromApi }

};

export default useCurrencyRates;
