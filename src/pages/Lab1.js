import CarProfile from "../components/CarProfile";
import { data } from "../data/module-data";

export default function Lab1() {
  return (
    <div>
      {data.map((car) => (
        <CarProfile key={car.id} car={car} />
      ))}
    </div>
  );
}
