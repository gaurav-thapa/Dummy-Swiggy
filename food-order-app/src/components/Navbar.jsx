import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Navbar() {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between py-4 px-16 items-center shadow text-lg">
      <div className="flex gap-6 items-center">
        <img
          className="h-10"
          src="https://cdn.pixabay.com/photo/2012/04/13/01/51/hamburger-31775_1280.png"
        />
        <span className="">Foodie&apos;s Place</span>
      </div>
      <div>
        <ul className="flex gap-6">
          <Link to={"/Dummy-Swiggy/"}>Home</Link>
          <Link to={"/Dummy-Swiggy/contact"}>Contact Us</Link>
          <Link to={"/Dummy-Swiggy/cart"}>Cart ({cartItems.length})</Link>
        </ul>
      </div>
    </div>
  );
}
