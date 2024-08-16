export default function RestaurantDetails ({details}) {
    const {name, totalRatingsString, avgRatingString, cuisines, costForTwoMessage } = details;
    return <div className="my-5">
        <div className="text-2xl font-bold">{name}</div>
        <div className="shadow-xl rounded p-10">
            <div className="font-bold">⭐{avgRatingString}({totalRatingsString}) | {costForTwoMessage}</div>
            <div className="text-red-600 font-bold">{cuisines.join(', ')}</div>
        </div>
    </div>
}