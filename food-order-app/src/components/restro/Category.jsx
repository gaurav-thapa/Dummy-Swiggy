import Accordian from "./accordian/Accordian";

export default function Category({ data }) {
  const category = data.card.card["@type"];
  let content;
  if (
    category === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  ) {
    content = (
      <Accordian
        key={data.card.card.title}
        expanded={true}
        title={data.card.card.title}
        items={data.card.card.itemCards}
      />
    );
  } else if (
    category ===
    "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  ) {
    content = (
      <div>
        <div className="font-semibold mt-10 pb-3">{data.card.card.title}</div>
        {data.card.card.categories.map((subCat) => (
          <div className="" key={subCat.title}>
            <Accordian
              key={subCat.title}
              expanded={false}
              title={subCat.title}
              items={subCat.itemCards}
            />
          </div>
        ))}
      </div>
    );
  }
  return <div >{content}</div>;
}
