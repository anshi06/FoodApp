import react,{ useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/cart-context";

const HeaderCartButton = (props) => {
  const cartctx = useContext(CartContext);
  const numberOfCartItems = cartctx.items.reduce((currNumber, item)=>{
    return currNumber+item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
