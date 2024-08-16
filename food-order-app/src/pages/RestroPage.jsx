import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import RestaurantAddress from "../components/restro/RestroAddress";
import RestaurantDetails from "../components/restro/RestaurantDetails";
import TopPicks from "../components/restro/top-picks/TopPicks";
import Category from "../components/restro/Category";
import ShimmerRestaurantPage from "../components/UI/shimmer/ShimmerRestaurantPage";
import { getRestaurantDataURL } from "../util/URL";

export default function RestroPage() {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery({
    queryKey: ["recommended", id],
    queryFn: loader,
    staleTime: Infinity,
  });
  if (isLoading) {
    return <ShimmerRestaurantPage />;
  }
  if (error) {
    <p>ERROR - {error.message}</p>;
  }

  if (data) {
    // console.log(data);
    const cards = data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
    const restroDetails = cards.find(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress"
    );
    const restaurantData = data.data.cards[2].card.card.info;
    const topPicksData = cards.find(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel"
    ).card.card.carousel;
    // console.log(cards);

    return (
      <>
        <div className="m-10 lg:w-2/3 mx-auto">
          <RestaurantDetails details={restaurantData} />
          <TopPicks data={topPicksData} />
          {cards.map((cat, index) => (
            <Category key={index} data={cat} />
          ))}
          <RestaurantAddress details={restroDetails.card.card} />
        </div>
      </>
    );
  }
}
async function loader({ queryKey }) {
  const [, id] = queryKey;
  const res = await fetch(getRestaurantDataURL(id));

  if (!res.ok) {
    throw new Error("Could not fetch recommendations");
  }
  return res.json();
}
