import NavBar from "./components/NavBar";
import Home from "./Home";
import { MobileNavbar } from "./components/NavBar";

export default function Main() {
  return (
    <>
      <NavBar />
      <MobileNavbar />
      <Home />
    </>
  );
}
