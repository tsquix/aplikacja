import { useParams } from "react-router-dom";
import { data } from "../data/module-data";
import CarProfile from "../components/CarProfile";
import { useContext } from "react";
import AppContext from "../data/AppContext";

export default function Lab2() {
  const { id } = useParams();
  const context = useContext(AppContext);
  const { items } = context;

  return (
    <div>
      <h1>id: {id}</h1>
      {items.map((car) => {
        if (parseInt(id) === parseInt(car.id)) {
          return <CarProfile key={car.id} car={car} />;
        }
        return null;
      })}
      {!items.some((car) => id == car.id) && (
        <p>Brak samochodu o podanym id.</p>
      )}
    </div>
  );
}
