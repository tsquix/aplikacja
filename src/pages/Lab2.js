import { useParams } from "react-router-dom";
import { data } from "../data/module-data";
import CarProfile from "../components/CarProfile";

export default function Lab2() {
  const { id } = useParams();

  return (
    <div>
      <h1>id: {id}</h1>
      {data.map((car) => {
        if (parseInt(id) === parseInt(car.id)) {
          return <CarProfile key={car.id} car={car} />;
        }
        return null;
      })}
      {!data.some((car) => id == car.id) && <p>Brak samochodu o podanym id.</p>}
    </div>
  );
}
