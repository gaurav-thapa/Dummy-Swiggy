import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <div className="text-center bg-cyan-500 text-white text-nowrap shadow-lg shadow-cyan-500/50 px-3 py-2">Please enable browser CORS extension to fetch data from SWIGGY!</div>
      <Outlet />
      <Footer />
    </>
  );
}
