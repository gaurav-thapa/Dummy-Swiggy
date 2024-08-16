import { useNavigate } from "react-router-dom";
export default function RestaurantCard({ res }) {
  const navigate = useNavigate();
  // console.log(res);
  return (
    <div className="w-72 cursor-pointer hover:scale-95 ease-in-out duration-100 flex flex-col shadow" onClick={() => navigate("restro/" + res.info.id)}>
      <img
        className="rounded-xl h-52 w-full"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          res.info.cloudinaryImageId
        }
      />
      <div className="p-4">
        <h3 className="font-bold text-lg line-clamp-1">{res.info.name}</h3>
        <div>
          ⭐ {res.info.avgRating} | {res.info.sla.slaString}
        </div>
        <div className="line-clamp-2">{res.info.cuisines.join(", ")}</div>
        <div className="">{res.info.areaName}</div>
      </div>
    </div>
  );
}
