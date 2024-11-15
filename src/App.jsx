import "./App.css";
import RootLayout from "./layouts/RootLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Lab4Edit from "./pages/Lab4Edit";
import Lab4Add from "./pages/Lab4Add";
import React, { useReducer } from "react";
import AppContext from "./data/AppContext";
import AppReducer from "./data/AppReducer";
import { data } from "./data/module-data";
import { menuItems } from "./config/menuConfig";

function App() {
  const [state, appDispatch] = useReducer(AppReducer, data);

  return (
    <AppContext.Provider value={{ items: state, dispatch: appDispatch }}>
      <Router>
        <RootLayout>
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
            <Route path="/lab4/add" element={<Lab4Add />} />
            <Route path="/lab4/edit/:id" element={<Lab4Edit />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </RootLayout>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
