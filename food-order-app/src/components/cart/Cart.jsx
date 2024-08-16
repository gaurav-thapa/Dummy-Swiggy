import { useDispatch, useSelector } from "react-redux";
import CartLeftDummy from "./CartLeftDummy";
import CartItems from "./CartItems";
import { Link } from "react-router-dom";
import { clearCart } from "../../util/cartSlice";

export default function Cart() {
  const items = useSelector((store) => store.cart.items);
  const totalAmount = useSelector((store) => store.cart.totalAmount);
  const dispatch = useDispatch();
  const clearCartHandler = () => {
    dispatch(clearCart());
  };
  console.log(items);

  return (
    <div className="container mx-auto m-10">
      <div className="flex justify-between gap-6">
        <CartLeftDummy />
        <div className="basis-1/2 rounded shadow-lg p-5">
          {items.length === 0 && (
            <div className="text-center text-xl mt-10">
              <div>Cart is Empty!</div>
              <div className="p-10 mt-5">
                <Link
                  className="text-white font-bold rounded bg-orange-500 p-3 m-5"
                  to={"/Dummy-Swiggy/"}
                >
                  Browse Restaurants
                </Link>
              </div>
            </div>
          )}
          {items.length !== 0 && (
            <>
              {" "}
              <div className="text-end">
                <button
                  className="bg-red-500 text-white font-bold my-3 p-2 rounded"
                  onClick={clearCartHandler}
                >
                  Clear Cart
                </button>
              </div>
              <div className="mb-5">Restaurant Name</div>
              <div className="border-b-2 pb-10">
                <CartItems items={items} />
              </div>
              <div className="py-5 border-b-4">
                <div>Bill Details</div>
                <div className="flex justify-between text-gray-400">
                  <div>Item Total</div>
                  <div>Rs {(totalAmount / 100).toFixed(2)}</div>
                </div>
              </div>
              <div className="flex justify-between mt-5">
                <div>TO PAY</div>
                <div>Rs {(totalAmount / 100).toFixed(2)}</div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
