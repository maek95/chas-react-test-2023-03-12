import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const initialState = {
  theme: "light",
}

function themeReducer(state, action) {

  if (action.type === "setTheme") {
    return {
      ...state,
      theme: action.theme,
    }
  } else {
    console.log("Unknown action type: ", action.type);
    return state;
  }
} 

export function ThemeProvider({children}) {

  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{state, dispatch}}>
      {children}
    </ThemeContext.Provider>
  )
}