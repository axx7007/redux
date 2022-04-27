import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counter";
import { getStudent } from "./redux/Student";
const House = () => {
  const counter = useSelector((store) => store.count);
  const dispatch = useDispatch();
  useEffect(()=>{
    
  })
  console.log(counter, "test");
  return (
    <div>
      House : {counter.data}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};
export default House;
