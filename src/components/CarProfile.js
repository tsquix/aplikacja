import React, { useState, useReducer } from "react";
import RatingBar from "./RatingBar";
import AppReducer from "../data/AppReducer";
//lab 1

export default function CarProfile({ car }) {
  const [state, dispatch] = useReducer(AppReducer, car);
  const [rating, setRating] = useState(car.rating);
  const [isFirstClick, setIsFirstClick] = useState(true);
  function rateCar() {
    let newRating;
    if (isFirstClick) {
      setIsFirstClick(false);
      newRating = 10;
      setRating(newRating);
      console.log(newRating);
    } else {
      newRating = rating === 10 ? 0 : rating + 1;
      setRating(newRating);
      console.log(newRating);
    }
    console.log("New rating to dispatch:", newRating);
    dispatch({
      type: "rate",
      id: car.id,
      rating: newRating,
    });
  }
  const currentRating = state.rating;

  return (
    <div className="mt-5 mx-4 ">
      <h2>{car.name}</h2>
      <ul className="text-start">
        <li>
          <strong>ID:</strong> {car.id}
        </li>
        <li>
          <strong>Rok produkcji:</strong> {car.year}
        </li>
        <li>
          <strong>Numer rejestracyjny:</strong> {car.registrationNumber}
        </li>
        <li>
          <strong>Rating:</strong> {currentRating}
        </li>
        <span className="my-4">
          <RatingBar rate={currentRating} />
        </span>
        <div className="mt-2">
          <button
            type="button"
            className="btn btn-primary "
            onClick={() => {
              dispatch({
                type: "edit",
                id: car.id,
              });
            }}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              dispatch({
                type: "delete",
                id: car.id,
              });
            }}
          >
            Delete
          </button>
          <button type="button" onClick={rateCar} className="btn btn-warning">
            Rate
          </button>
        </div>
      </ul>
    </div>
  );
}
