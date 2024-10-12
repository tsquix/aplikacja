import logo from "./logo.svg";
import "./App.css";
import { data } from "./module-data";
import CarProfile from "./CarProfile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {data.map((car) => (
          <CarProfile key={car.id} car={car} />
        ))}
        {/* <CarProfile car={data[0]} /> */}
      </header>
    </div>
  );
}

export default App;
