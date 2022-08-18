import React, { useState, useEffect } from "react";

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/recipes").then(
      res => res.json()
    ).then(
      data => {
        setData(data);
        console.log(data);
      }
    )
  }, []);

  return (
    <div>
      <h1>
        HOME
      </h1>
      <div>
        {(typeof data.recipes === 'undefined') ? (
          <p>Loading...</p>
        ) : (
          data.recipes.map((recipe, i) => (
            <p key={i}>{recipe}</p>
          ))
        )}
      </div>
    </div>);
}

export default App;
