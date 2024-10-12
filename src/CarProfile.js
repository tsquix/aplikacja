import React from "react";

const CarProfile = ({ car }) => {
  return (
    <div className="mt-5">
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
      </ul>
    </div>
  );
};

export default CarProfile;
