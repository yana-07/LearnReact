import { useContext } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.css"

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({
            ...item,
            amount: 1
        });
    };
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartElements = cartCtx.items.map(item => {
        return <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
    });

    return (
        <Modal onClose={props.onClose}>
            <ul className={classes['cart-items']}>
                {cartElements}              
            </ul>          
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {cartCtx.items.length > 0 && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;