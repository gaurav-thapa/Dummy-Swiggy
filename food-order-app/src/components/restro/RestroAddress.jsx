export default function RestaurantAddress ({details}) {
    // console.log(details);
    const {name, area, completeAddress} = details;
    return <div className="py-5 my-5">
        <div className="font-bold">{name}</div>
        <div>({area})</div>
        <div>{completeAddress}</div>
    </div>
}