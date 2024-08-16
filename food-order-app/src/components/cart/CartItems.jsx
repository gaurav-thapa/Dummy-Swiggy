import { useDispatch } from "react-redux";
import { addItem, clearCart, removeItem } from "../../util/cartSlice";

export default function CartItems({ items }) {
  const dispatch = useDispatch();
  const onAddHandler = (item) => {
    dispatch(addItem(item));
  };
  const onRemoveHandler = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <div className="flex justify-between" key={item.id}>
          <div className="w-full">
            <div className="flex justify-between">
              <div>
                {item.itemAttribute.vegClassifier === "VEG" && "🟢"}
                {item.itemAttribute.vegClassifier === "NONVEG" && "🔴"}
                {item.name}
              </div>
              <div className="border-2 mx-2 font-bold flex justify-center text-green-400">
                <button onClick={() => onRemoveHandler(item)} className=" px-2">
                  -
                </button>
                {item.c_qty}
                <button onClick={() => onAddHandler(item)} className=" px-2">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="text-end w-28">
            {item.price
              ? "Rs. " + ((item.price * item.c_qty) / 100).toFixed(2)
              : "Rs. " + ((item.defaultPrice * item.c_qty) / 100).toFixed(2)}
          </div>
        </div>
      ))}
     
    </div>
  );
}
