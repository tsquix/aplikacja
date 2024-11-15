import CarProfileDisplay from "../components/CarProfileDisplay";
import { data } from "../data/module-data";

export default function Lab1() {
  return (
    <div className="mt-5 mx-4 ">
      {data.map((car) => (
        <CarProfileDisplay key={car.id} car={car} />
      ))}
    </div>
  );
}
