import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState('')

  function handleAddCart () {
    setInCart('in-cart')
  }

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" value={name} onClick={handleAddCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
