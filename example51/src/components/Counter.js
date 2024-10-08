import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';


const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter)

  const incrementHandler = () => {
    dispatch({type : 'increment'});
  }

  const increaseHandler = () => {
    dispatch({type : 'increase', amount : 20});
  }
  const decrementHandler = () => {
    dispatch({type : 'decrement'});
  }

  const toggleCounterHandler = () => {
    dispatch({type : 'toggle'});
  };

  return (
    <main className = {classes.counter}>
      <h1> Redux Counter </h1>
      <div className = {classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler} > increment</button>
        <button onClick={increaseHandler} > increase</button>
        <button onClick={decrementHandler} > decrement</button>
      </div>
      <button onClick={toggleCounterHandler} > Toggle Counter </button>
    </main>
  )

}

export default Counter;
