import { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setbtnIsHighlighted] = useState(false); // for bump
  const cartctx = useContext(CartContext); // using cartContext to increase the amount of cart items
  const { items } = cartctx;// object destructuring
  const numberOfCartItems = items.reduce((currNumber, item)=>{
    return currNumber+item.amount;
  }, 0);
   
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`
  useEffect(() => {
    if(items.length === 0){
      return;
    }
    setbtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setbtnIsHighlighted(false);
    }, 300);
    return () =>{
      clearTimeout(timer); // need to clear the old time using clean up function it is automatically runs after every component re-evaluation.
    }
  }, [items])// useEffect is used for bump the cart button when items are added into the cart (Animation)
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
