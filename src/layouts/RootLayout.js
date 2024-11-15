import Footer from "../components/Footer";
import NavBarMenu from "../components/NavBarMenu";
import { menuItems } from "../config/menuConfig";

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
