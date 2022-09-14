import classes from "./Cart.module.csss";
const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: "c1", name: "Samose", amount: "2", price: "12" }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return <div>
    {cartItems}
    <div className={classes.total}>
        <span>Total Amount</span>
        <span>24.76</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button--alt']}>close</button>
        <button className={classes.button}>order</button>

    </div>
  </div>;
};
export default Cart;
