import React, { useReducer } from "react";
// import Counter from "./components/Counter";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";

export const reducerContext = React.createContext();

const initialState = 0;
function reducer(state, action) {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Reset":
      return initialState;
    default:
      return state;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <reducerContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="w-full">
        {/* <Counter></Counter> */}
        <div className="text-center">Count : {count}</div>
        <ComponentA></ComponentA>
        <ComponentB></ComponentB>
        <ComponentC></ComponentC>
      </div>
    </reducerContext.Provider>
  );
}

export default App;
