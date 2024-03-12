// 6. Users i Redux (3p)
// Skapa en komponent som lägger till användare i en lista i Redux.
// Det ska gå att skriva in ett namn i ett inputfält och klicka på en "Lägg till"-knapp
// för att lägga till användaren. Alla användare ska visas i en lista under inputfältet.

import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store";
import { useState } from "react";
import { addUser, deleteUser } from "./usersSlice";

// Som hjälp finns redan en slice (usersSlice.js) som hanterar användarlistan. Dessutom är
// react-redux och @reduxjs/toolkit redan installerat i projektet.
// Skapa en store som använder sig av usersSlice.js och Lägg till en Provider i App-komponenten
// nedanför.

function InputAndButtonRedux() {

  const dispatch = useDispatch();

  const [inputText, setInputText] = useState("");

  return (
    <div>
      <input onChange={(e) => {
        setInputText(e.target.value)
      }} type="text" />
      <button onClick={() => {
        dispatch(addUser(inputText))
      }}>Add</button>
    </div>
  )
}

function DisplayUsers() {

  const userList = useSelector(state => {
    return state.users.list;
  })
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Users:</h2>
      {userList.map(user => {
        return (
          <li key={user.id}>
            {user.username}
            <button onClick={() => {
              dispatch(deleteUser(user.id))
            }}>Delete</button>
          </li>
        )
      }) }
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <div>
        <InputAndButtonRedux></InputAndButtonRedux>
        <DisplayUsers></DisplayUsers>
      </div>
    </Provider>
  );
}

export default App;
