// 2. API-Anrop och Rendering (3p)
// Använd fetch för att hämta posts från https://jsonplaceholder.typicode.com/posts.
// Visa endast titlarna för de första 5 inläggen.
// Varje titel ska vara en klickbar länk som, när man klickar på den,
// loggar postens ID till konsolen. Använd <button> för den klickbara länken.

import { useEffect, useState } from "react";

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      
      setPosts(data);
    }
    getPosts();
  }, [])

  if(!posts) { // now we wont need terniary ("if posts exist") in return statement later
    return <div>Laddar...</div>
  }

  const firstFivePosts = posts.filter((post) => {
    return post.id <= 5; // id starts at 1
  })

  function handleConsoleLogId(clickedId) {
    console.log("Clicked post ID: ", clickedId);
  }

  return (
    <div>
      <ul>
        {firstFivePosts.map(post => {
          return (
            <li key={post.id}>
              <button onClick={() => {
                handleConsoleLogId(post.id);
              }}>
                <h2>{post.title}</h2>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
