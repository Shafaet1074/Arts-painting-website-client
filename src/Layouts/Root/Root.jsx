import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Navbar/Navbar";
import Footer from "../../Pages/Footer/Footer";
import { ThemeProvider } from "../../context/ThemeContext";

const Root = () => {
  return (
    <ThemeProvider>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </ThemeProvider>
  );
};

export default Root;
