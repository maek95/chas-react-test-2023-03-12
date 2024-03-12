// Context API för Temahantering (3p)
// Använd Context API för att skapa ett enkelt tema-byte-system.
// Skapa en ThemeContext som innehåller aktuellt tema (t.ex. "light" eller "dark").
// Använd en Provider från ThemeContext i App-komponenten nedanför.
// Skapa två barn-komponenter som använder temat.
// Skapa en tredje barn-komponent som innehåller en knapp som kan växla tema.
// Providern i App-komponenten ska omsluta de tre barn-komponenterna.

import { useContext, useState } from "react";
import { ThemeContext, ThemeProvider } from "./ThemeContext";

function ThemeButton() {
  const { state, dispatch } = useContext(ThemeContext);

  const { theme } = state;

  return (
    <div>
      {theme === "light" ? (
        <button
          onClick={() => {
            dispatch({ type: "setTheme", theme: "dark" });
          }}
        >
          Set dark-mode
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch({ type: "setTheme", theme: "light" });
          }}
        >
          Set light-mode
        </button>
      )}
    </div>
  );
}

function Button() {
  const { state } = useContext(ThemeContext);
  const { theme } = state;

  return (
    <div>
      {theme === "light" ? (
        <button style={{ backgroundColor: "lightblue" }}>Box </button>
      ) : (
        <button style={{ backgroundColor: "blue" }}>Box </button>
      )}
    </div>
  );
}

function Box() {
  const { state } = useContext(ThemeContext);
  const { theme } = state;

  // TOO MANY RE-RENDERS????
  /*  const [backgroundColor, setBackgroundColor] = useState("white");

  if (theme === "light") {
    setBackgroundColor("lightgreen");
  } else if (theme === "dark") {
    setBackgroundColor("green");
  } else {
    console.log("Unknown theme: ", theme);
  } */

  return (
    <div>
      {theme === "light" ? (
        <div style={{ backgroundColor: "lightgreen" }}>Box </div>
      ) : (
        <div style={{ backgroundColor: "green" }}>Box </div>
      )}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div>
        <Button></Button>
        <Box></Box>
        <ThemeButton></ThemeButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
