import React, { useContext } from "react";
import { reducerContext } from "../App";

function ComponentB() {
  const countState = useContext(reducerContext);
  return (
    <div className="mt-10 text-center">
      <div className="mb-4">Component B : {countState.countState}</div>
      <div className="flex w-3/4 mx-auto my-auto">
        <div
          className="w-1/6 p-2 mx-auto text-center border-2 border-gray-500 border-solid rounded-md btn"
          onClick={() => {
            countState.countDispatch("Reset");
          }}
        >
          Reset
        </div>
        <div
          className="w-1/6 p-2 mx-auto text-center border-2 border-gray-500 border-solid rounded-md btn"
          onClick={() => {
            countState.countDispatch("Increment");
          }}
        >
          Increment by 1
        </div>
        <div
          className="w-1/6 p-2 mx-auto text-center border-2 border-gray-500 border-solid rounded-md btn"
          onClick={() => {
            countState.countDispatch("Decrement");
          }}
        >
          Decrement by 1
        </div>
      </div>
    </div>
  );
}

export default ComponentB;
