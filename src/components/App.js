import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);

  const [isDark, setIsDark] = useState(false)

  function handleDarkMode () {
    setIsDark(!isDark)
  }

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  return (
    <div className={"App " + (isDark ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>{isDark ? 'Light Mode' : 'Dark Mode'}</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
