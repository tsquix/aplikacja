import Footer from "../components/Footer";
import NavBarMenu from "../components/NavBarMenu";
import Home from "../pages/Home";
import Lab1 from "../pages/Lab1";
import Lab2 from "../pages/Lab2";
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
export default function RootLayout({ children }) {
  return (
    <div>
      <nav>
        <NavBarMenu items={menuItems} />
      </nav>
      <div>{children}</div>
      <Footer />
    </div>
  );
}
