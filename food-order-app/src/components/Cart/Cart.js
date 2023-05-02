import Modal from "../UI/Modal";
import classes from "./Cart.module.css"

const Cart = (props) => {
    const cartElements = [{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map(item => <liv>{item.name}</liv>);
    return (
        <Modal>
            <ul className={classes['cart-items']}>
                {cartElements}              
            </ul>          
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;