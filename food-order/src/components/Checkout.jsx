import { useContext } from "react";

import Modal from "./UI/Modal.jsx";
import Input from "./UI/Input.jsx";
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import { currencyFormatter } from "../util/formatting.js";
import Button from "./UI/Button.jsx";

export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price , 0);

    function handleCloseCheckout() {
        userProgressCtx.hideCheckout();
    }

    return (
        <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleCloseCheckout}>
            <form>
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
                <Input id="full-name" label="Full Name" type="text" />
                <Input id="email" label="E-Mail Address" type="email" />
                <Input id="street" label="Street" type="text" />
                <div className="control-row">
                    <Input id="postal-code" label="Postal Code" type="text" />
                    <Input id="city" label="City" type="text" />
                </div>
                <p className="modal-actions">
                    <Button type="button" textOnly onClick={handleCloseCheckout}>Close</Button>
                    <Button>Submit Order</Button>
                </p>
            </form>
        </Modal>
    )
}