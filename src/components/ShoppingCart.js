import React, { useReducer } from 'react';

// Action types
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';

// Reducer function to manage the cart state
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case REMOVE_ITEM:
      return state.filter(item => item !== action.payload);
    default:
      return state;
  }
};

// ShoppingCart functional component
const ShoppingCart = () => {
  // Initialize cart state using useReducer
  const [cart, dispatch] = useReducer(cartReducer, []);

  // Function to add an item to the cart
  const addItemToCart = (item) => {
    dispatch({ type: ADD_ITEM, payload: item });
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (item) => {
    dispatch({ type: REMOVE_ITEM, payload: item });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItemFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        {/* Example items for demonstration */}
        <button onClick={() => addItemToCart('Item 1')}>Add Item 1</button>
        <button onClick={() => addItemToCart('Item 2')}>Add Item 2</button>
        <button onClick={() => addItemToCart('Item 3')}>Add Item 3</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
