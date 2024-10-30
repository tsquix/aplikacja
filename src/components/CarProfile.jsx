import React, { useReducer } from "react";
import AppReducer from "../data/AppReducer";

export default function CarProfile({ car }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <div>
      <h1>{car.name}</h1>
      {/* Other car details */}
      <button onClick={() => dispatch({ type: "edit", payload: car.id })}>
        Edit
      </button>
    </div>
  );
}
