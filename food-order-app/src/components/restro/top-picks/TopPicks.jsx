import TopPickItem from "./TopPickItem";

export default function TopPicks({ data }) {
  // console.log(data);
  return (
    <>
    <div className="my-5 text-xl font-bold">Top Picks</div>
      <ul className="flex gap-4 overflow-x-auto my-5">
        {data.map((item) => (
          <TopPickItem key={item.bannerId} item={item.dish.info} />
        ))}
      </ul>
    </>
  );
}
