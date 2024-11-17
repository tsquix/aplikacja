import Comments from "../components/Comments";
import User from "../components/User";
import Home from "../pages/Home";
import Lab1 from "../pages/Lab1";
import Lab2 from "../pages/Lab2";
import Lab3 from "../pages/Lab3";
import Lab4 from "../pages/Lab4";
import Lab4Add from "../pages/Lab4Add";
import Lab5 from "../pages/Lab5";

export const menuItems = [
  {
    id: 1,
    label: "Home",
    url: "/",
    urlPattern: "/",
    element: <Home />,
  },
  {
    id: 2,
    label: "Lab 1",
    url: "/lab1",
    urlPattern: "/lab1",
    element: <Lab1 />,
  },
  {
    id: 3,
    label: "Lab 2",
    url: "/lab2/1",
    urlPattern: "/lab2/:id",
    element: <Lab2 />,
  },
  {
    id: 4,
    label: "Lab 3",
    url: "/lab3",
    urlPattern: "/lab3",
    element: <Lab3 />,
  },
  {
    id: 5,
    label: "Lab 4",
    url: "/lab4",
    urlPattern: "/lab4",
    element: <Lab4 />,
  },
  {
    id: 6,
    label: "Lab4 Add",
    url: "/lab4/add",
    urlPattern: "/lab4/add",
    element: <Lab4Add />,
  },
  {
    id: 6,
    label: "Lab5",
    url: "/lab5",
    urlPattern: "/lab5",
    element: <Lab5 />,
  },
];
