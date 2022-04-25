import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counter";
const House = () => {
  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  console.log(counter.data);
  return (
    <div>
      House {counter.data}
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
};
export default House;
