import React, { useReducer } from "react";
import "../style/app.css";

const initialState = { firstCounter: 0, secondCounter: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "Increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "Decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "Increment 2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "Decrement 2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "Reset":
      return initialState;
    default:
      return state;
  }
}


function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="mt-64 text-center">
      <div className="mb-4">
        FirstCount : {count.firstCounter} SecondCount : {count.secondCounter}
      </div>
      <div className="flex w-3/4 mx-auto my-auto">
        <div
          className="w-1/6 p-2 mx-auto text-center border-2 border-gray-500 border-solid rounded-md btn"
          onClick={() => {
            dispatch({ type: "Reset" });
          }}
        >
          Reset
        </div>
        <div
          className="w-1/6 p-2 mx-auto text-center border-2 border-gray-500 border-solid rounded-md btn"
          onClick={() => {
            dispatch({ type: "Increment", value: 1 });
          }}
        >
          Increment by 1
        </div>
        <div
          className="w-1/6 p-2 mx-auto text-center border-2 border-gray-500 border-solid rounded-md btn"
          onClick={() => {
            dispatch({ type: "Decrement", value: 1 });
          }}
        >
          Decrement by 1
        </div>
        <div
          className="w-1/6 p-2 mx-auto text-center border-2 border-gray-500 border-solid rounded-md btn"
          onClick={() => {
            dispatch({ type: "Increment 2", value: 2 });
          }}
        >
          Increment by 2
        </div>
        <div
          className="w-1/6 p-2 mx-auto text-center border-2 border-gray-500 border-solid rounded-md btn"
          onClick={() => {
            dispatch({ type: "Decrement 2", value: 2 });
          }}
        >
          Decrement by 2
        </div>
        <div
          className="w-1/6 p-2 mx-auto text-center border-2 border-gray-500 border-solid rounded-md btn"
          onClick={() => {
            dispatch({ type: "Increment", value: 5 });
          }}
        >
          Increment by 5
        </div>
        <div
          className="w-1/6 p-2 mx-auto text-center border-2 border-gray-500 border-solid rounded-md btn"
          onClick={() => {
            dispatch({ type: "Decrement", value: 5 });
          }}
        >
          Decrement by 5
        </div>
      </div>
    </div>
  );
}

export default Counter;
