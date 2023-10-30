//import { Component } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';

import { counterActions } from '../store/counter.js';
import classes from './Counter.module.css';

const Counter = () => {
  // automatically a subscription is set up to the redux store for the current component
  // we should use the identifiers which we have assigned in the reducer map to drill into our specific state slices
  // e.g. state.counter indicates that we want to access the state produced by the counter slice's reducer, where we have a 
  // property named 'counter'
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    //dispatch({ type: 'increment' });
    dispatch(counterActions.increment()); // increment is a method which when executed creates a full action object with the type set to the automatically created unique action identifier
  };

  const increaseHandler = (amount) => {
    //dispatch({ type: 'increase', amount });
    dispatch(counterActions.increase(amount)); // { type: SOME_UNIQUE_IDENTIFIER, payload: amount }
  }

  const decrementHandler = () => {
    //dispatch({ type: 'decrement' });
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    //dispatch({ type: 'toggle' });
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={() => increaseHandler(5)}>Increase by 5</button>
      <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//         <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//         <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' })
//   };
// }

// // React-redux will still set up a subscription and manage it
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
