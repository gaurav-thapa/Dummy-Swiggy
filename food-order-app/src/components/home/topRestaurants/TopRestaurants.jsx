import { useEffect, useRef, useState } from "react";
import ShimmerTopRestaurantPage from "../../UI/shimmer/ShimmerTopRestaurantPage";
import RestaurantCard from "./RestaurantCard";
import { useQuery } from "@tanstack/react-query";
import { TOP_RESTAURANTS } from "../../../util/URL";

export default function TopRestaurants() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["top-restaurants"],
    queryFn: loader,
    staleTime: Infinity,
  });

  const searchInput = useRef();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const timer = useRef(null);

  const requiredData = data && data.data.cards[1].card.card;
  const title = data && requiredData.header.title;
  const restaurants =
    data && requiredData.gridElements.infoWithStyle.restaurants;

  const searchHandler = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      setFilteredRestaurants(() => {
        return restaurants.filter((res) =>
          res.info.name
            .toLowerCase()
            .includes(searchInput.current.value.toLowerCase())
        );
      });
    }, 1000);
  };

  useEffect(() => {
    if (data) {
      setFilteredRestaurants(restaurants);
    }
  }, [data, restaurants]);
  return (
    <div className="my-10 container mx-auto">
      <div className="text-center mb-5">
        <input
          ref={searchInput}
          onChange={searchHandler}
          className="border-2 rounded p-2"
          placeholder="Search"
          type="text"
        />
      </div>
      <h3 className=" font-bold text-xl mb-5">{title}</h3>
      <div className="flex flex-wrap place-content-center gap-6">
        {isLoading && <ShimmerTopRestaurantPage />}
        {error && <p>ERROR - {error.message}</p>}
        {data &&
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} res={restaurant} />
          ))}
      </div>
    </div>
  );
}

async function loader() {
  const res = await fetch(TOP_RESTAURANTS);
  if (!res.ok) {
    throw new Error("Could not fetch top restaurants");
  }
  return res.json();
}
