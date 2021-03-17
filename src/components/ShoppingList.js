import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState('')

  const [itemsArr, setItemsArr] = useState(items)

  function handleSelectDrop (event) {
    setSelectedCategory(event.target.value)
    // console.log(event.target.value)

    if (event.target.value === 'All'){
      setItemsArr(items)
    }else{
      const filteredItems = items.filter( item => item.category ===event.target.value)
      setItemsArr(filteredItems)
      console.log(filteredItems)
    }

  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelectDrop}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsArr.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
