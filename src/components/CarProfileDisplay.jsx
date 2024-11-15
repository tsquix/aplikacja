import React from "react";

export default function CarProfile({ car }) {
  return (
    <div>
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
      </ul>
    </div>
  );
}
