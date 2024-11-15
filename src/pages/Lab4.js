import React, { useContext } from "react";
import CarProfile from "../components/CarProfile";
import AppContext from "../data/AppContext";

export default function Lab4() {
  const context = useContext(AppContext);
  const { items, removeItem, updateRating } = context;

  const handleDelete = (id) => {
    removeItem(id);
  };

  const handleRating = (id, newRating) => {
    updateRating(id, newRating);
  };

  return (
    <div className="mbb">
      {items.map((car) => (
        <CarProfile
          key={car.id}
          car={car}
          onDelete={() => handleDelete(car.id)}
          onRating={(newRating) => handleRating(car.id, newRating)}
        />
      ))}
    </div>
  );
}
