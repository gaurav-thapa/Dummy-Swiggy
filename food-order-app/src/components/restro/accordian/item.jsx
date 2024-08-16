import { useDispatch } from "react-redux";
import { addItem } from "../../../util/cartSlice";

export default function Item({ info }) {
  const { price, defaultPrice, imageId, ratings } = info;
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem(info));
  }
  return (
    <div className="flex border-b-2 p-5 rounded gap-6 justify-between ">
      <div>
        <div className="font-bold">{info.name}</div>
        <div className="line-clamp-2">{info.description}</div>
        <div>
          ₹{price / 100 || defaultPrice / 100}
          &nbsp;
          <span>{/* {offerTags[0].title}&nbsp;{offerTags[0].subTitle} */}</span>
        </div>
        <div className="flex">
          ⭐
          {ratings.aggregatedRating.rating ? (
            <div>
              <span className="text-green-500 font-bold">
                {ratings.aggregatedRating.rating}
              </span>
              ({ratings.aggregatedRating.ratingCountV2})
            </div>
          ) : (
            "No Ratings Yet!"
          )}
        </div>
      </div>
      <div className="flex-col flex-none w-30">
        <img
          className="h-40 w-40"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
            imageId
          }
        />
        <div className="text-center">
          <button onClick={handleAddItem} className="rounded -mt-5 text-green-500 border bg-white px-6 py-2 font-bold hover:bg-gray-300">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
