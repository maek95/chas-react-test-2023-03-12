// 3. Custom Hook för counter (3p)
// Skapa en custom hook, useCounter, som hanterar en räknare.
// Denna hook ska tillhandahålla två funktioner: en för att öka
// räknarens värde och en för att minska den. Skriv kod i App-komponenten
// nedanför som använder din custom hook och visar räknarens värde
// samt två knappar för att öka och minska värdet.

import { useState } from "react";

function useCounter(increaseOrDecrease, number) {

  function increaseNumber() {
    return number++;
  }
  function decreaseNumber() {
    return number--;
  }

  if (increaseOrDecrease === "increase") {  
    increaseNumber();
  } else if (increaseOrDecrease === "decrease" ) {
    decreaseNumber();
  } else {
    console.log("Unknown action in useCounter function: ", increaseOrDecrease);
  }

  return number;
}

function App() {

  const [number, setNumber] = useState(0);

  return (
    <div className="flex gap-8">
      <button onClick={() => {
        const newNum = useCounter("increase", number);
        setNumber(newNum);
      }}>Increase</button>
      <b>{number}</b>
      <button onClick={() => {
        const newNum = useCounter("decrease", number);
        setNumber(newNum);
      }}>Decrease</button>
    </div>
  );
}

export default App;
