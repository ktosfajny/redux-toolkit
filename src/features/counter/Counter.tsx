import { useAppSelector, useAppDispatch } from "app/hooks";
import { increment, decrement, incrementAsync } from "./counterSlice";
const Counter = () => {
  const dispatch = useAppDispatch();

  const count = useAppSelector((state) => state.counter.value);

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
  const handleAsync = () => dispatch(incrementAsync(3));

  return (
    <div>
      <h1>wynik: {count}</h1>
      <div>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <div>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <div>
        <button onClick={handleAsync}>async</button>
      </div>
    </div>
  );
};

export default Counter;
