import { Fragment } from "react";
import ReactDOM  from "react-dom";

import classes from "./Modal.module.css"

// if we use a context and we bind a click on the backdrop to always closing the cart,
// this would make the backdrop very specific and the modal less reusable for other purposes 
// using more levels of props (prop-chaining) is even better as it makes the modal more reusable
const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}/>
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    );
};

export default Modal;