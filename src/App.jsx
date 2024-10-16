import "./App.css";
import RootLayout from "./layouts/RootLayout";
import Lab1 from "./pages/Lab1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lab2 from "./pages/Lab2";
import NotFound from "./pages/NotFound";
import SimpleLayout from "./layouts/SimpleLayout";
const menuItems = [
  {
    id: 1,
    label: "Home",
    url: "/",
    urlPattern: "/",
    element: <Home />,
  },
  {
    id: 2,
    label: "Laboratorium 1",
    url: "/lab1",
    urlPattern: "/lab1",
    element: <Lab1 />,
  },
  {
    id: 3,
    label: "Laboratorium 2",
    url: "/lab2/1",
    urlPattern: "/lab2/:id",
    element: <Lab2 />,
  },
];
function App() {
  return (
    <Router>
      <>
        <RootLayout items={menuItems}>
          <Routes>
            {menuItems.map((item) => (
              <Route
                key={item.id}
                path={item.urlPattern}
                element={item.element}
              />
            ))}
            <Route path="/*" element={<NotFound />} />
            <Route path="/lab2" element={<p>Brak id samochodu</p>} />
          </Routes>
        </RootLayout>
      </>
    </Router>
  );
}

export default App;
