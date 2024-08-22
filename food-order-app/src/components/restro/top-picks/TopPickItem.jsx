import { useDispatch } from "react-redux";
import { IMAGE_URL } from "../../../util/URL";
import { addItem } from "../../../util/cartSlice";

export default function TopPickItem({ item }) {
  const { name, imageId, description, price, defaultPrice } = item;
  const dispatch = useDispatch();
  const addItemHandler = () => {
    dispatch(addItem(item));
  }
  return (
    <li>
      <div className="w-72 h-72 relative" onClick={addItemHandler}>
        
        <img className="h-72 w-72 rounded-lg brightness-50" src={IMAGE_URL + imageId} />
        <div className="absolute top-0 p-5 text-white">
          <div className="font-bold text-xl pb-3"> {name}</div>
          <div className="line-clamp-5 tracking-tighter">{description}</div>
        </div>
        <div className="absolute bottom-0 p-5 text-white text-xl">Rs. {(defaultPrice/100 || price / 100).toFixed(2)}</div>
        <button className="absolute bottom-0 right-0 m-3 rounded text-green-500 border bg-white px-6 py-2 font-bold hover:bg-gray-300">
          ADD
        </button>
      </div>
    </li>
  );
}
