import { useRef, useState } from 'react';
import classes from './Checkout.module.css';
const isEmpty = value => value.trim() === '';
const isfiveChars = value => value.trim().length === 5;

const Checkout = (props) => {
    const [formsInputsValidity, setFormsInputValidity] = useState({
        name: true,
        city: true,
        postalCode: true,
        street: true

    })
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();
  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredpostal = postalInputRef.current.value;
    const enteredcity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredcity);
    const enteredPostalIsValid = isfiveChars(enteredpostal);

    setFormsInputValidity({
        name :enteredNameIsValid,
        city: enteredCityIsValid,
        postalCode:enteredPostalIsValid,
        street: enteredStreetIsValid
    })

    const formIsValid = enteredNameIsValid && enteredCityIsValid && enteredPostalIsValid && enteredStreetIsValid;
    if(!formIsValid){
        return;
    }
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={` ${classes.control} ${formsInputsValidity.name ? '' : classes.invalid}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formsInputsValidity.name && <p>Please enter a valid name</p>}
      </div>
      <div className={` ${classes.control} ${formsInputsValidity.street ? '' : classes.invalid}`}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef}/>
        {!formsInputsValidity.street && <p>Please enter a valid Street</p>}
      </div>
      <div className={` ${classes.control} ${formsInputsValidity.postalCode ? '' : classes.invalid}`}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalInputRef}/>
        {!formsInputsValidity.postalCode && <p>Please enter a valid Postal Code</p>}
      </div>
      <div className={` ${classes.control} ${formsInputsValidity.city ? '' : classes.invalid}`}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef}/>
        {!formsInputsValidity.city && <p>Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;