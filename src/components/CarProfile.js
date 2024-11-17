import React, { useState, useEffect, useReducer, useContext } from "react";
import RatingBar from "./RatingBar";
import AppContext from "../data/AppContext";
import { useNavigate } from "react-router-dom";
import useDispatch from "../hooks/useDispatch";
export default function CarProfile({ car }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isFirstClick, setIsFirstClick] = useState(true);

  function rateCar() {
    let newRating;
    if (isFirstClick) {
      setIsFirstClick(false);
      newRating = 10;
    } else {
      newRating = car.rating === 10 ? 0 : car.rating + 1;
    }

    dispatch({
      type: "rate",
      id: car.id,
      rating: newRating,
    });
  }

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
          <strong>Rating:</strong> {car.rating}
        </li>
        <span className="my-4">
          <RatingBar rate={car.rating} />
        </span>
        <div className="mt-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              dispatch({
                type: "edit",
                id: car.id,
              });
              navigate(`/lab4/edit/${car.id}`);
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
                cars: { car },
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
