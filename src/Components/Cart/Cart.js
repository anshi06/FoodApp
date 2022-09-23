import { useContext, useState} from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../Store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [showForm, setShowForm] = useState(false);
  const showFormHandler = () =>{
    setShowForm(true);
  }
  const cartctx = useContext(CartContext);
  const totalAmount = `$${cartctx.totalAmount.toFixed(2)}`;
  const hasItems = cartctx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartctx.removeItem(id);
    
  };
  const cartItemAddHandler = (item) => {
    cartctx.addItem({...item, amount: 1})
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const modalActions = <div className={classes.actions}>
  <button className={classes["button--alt"]} onClick={props.onClose}>
    close
  </button>
  {hasItems && <button className={classes.button} onClick={showFormHandler}>order</button>}
</div>
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {showForm && <Checkout onCancel ={props.onClose}/>}
      {!showForm && modalActions}
      
    </Modal>
  );
};
export default Cart;
