// 1. Lista med useState (3p)
// Skapa en komponent som visar en lista med hobbies.
// Användaren ska kunna lägga till en ny hobby via ett
// inputfält och en "Lägg till"-knapp. Varje hobby i listan
// ska ha en "Ta bort"-knapp som tar bort hobbyn från listan.
// Använd useState för att hantera listan.

import { useState } from "react";

function App() {

  const [hobbies, setHobbies] = useState([]);
  const [inputText, setInputText] = useState("");

  function handleAddHobby(title) {
    setHobbies([...hobbies, {
      hobby: title,
      id: Date.now(), // so we can find the hobby when deleting
    }
    ])
  }

  function handleDeleteHobby(hobbyObj) {

    const filteredHobbies = hobbies.filter(hobby => {
      return hobby.id !== hobbyObj.id;
    })

    setHobbies(filteredHobbies);
  }

  console.log(hobbies);
  
  return (
    <div>
      <input value={inputText} onChange={(e) => {
        setInputText(e.target.value)
      }} type="text" />
      <button onClick={() => {
        handleAddHobby(inputText);
        setInputText("");
      }}>Add Hobby</button>

        <ul className="flex flex-col gap-4">
          {hobbies.map((hobby) => {
            return (
              <li className="flex gap-4" key={hobby.id}>
                <p className="">{hobby.hobby}</p>
                <button onClick={() => {
                  handleDeleteHobby(hobby)
                }}>Delete</button>
              </li>
            )
          })}
        </ul>
    </div>
  );
}

export default App;
