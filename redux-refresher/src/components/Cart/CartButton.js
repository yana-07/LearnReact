import { useDispatch, useSelector } from 'react-redux';

import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(state => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle()); // toggle is an action creator method which returns an action object
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
