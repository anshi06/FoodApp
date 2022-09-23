import { useReducer } from "react";
import CartContext from "./cart-context";
const defaultCartState = {
  items: [], // items Array contains name,price,description,amount,key
  totalAmount: 0, // total price
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedtotalAmount =
      state.totalAmount + action.item.price * action.item.amount; // Total price 
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    ); // if item is already present in cart return true and fin index
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount, // updating amount of existing cart item
      }; // updatedItem is an updated item object.
      updatedItems = [...state.items]; //Array of updating items after adding
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedtotalAmount,
    };
  }

  if (action.type === "REMOVE") {
   
    const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      const updatedtotalAmount =
      state.totalAmount - existingCartItem.price; // total price
      let updatedItems;
      if (existingCartItem.amount === 1) {
        updatedItems = state.items.filter(item => item.id !== action.id);
      } else {
        const updatedItem = {...existingCartItem, amount:existingCartItem.amount-1};
        updatedItems = [...state.items]
        updatedItems[existingCartItemIndex] = updatedItem;
      }
  
      return {
        items: updatedItems,
        totalAmount: updatedtotalAmount,
      };
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
