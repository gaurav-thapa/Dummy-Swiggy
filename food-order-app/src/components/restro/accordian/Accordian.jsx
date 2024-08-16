import { useState } from "react";
import AccordianItem from "./AccordianItem";

export default function Accordian({ title, items, expanded }) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const onAccordianTitleClickHandler = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="border-b-2">
      <div
        onClick={onAccordianTitleClickHandler}
        className="font-bold text pb-3 flex justify-between hover:cursor-pointer"
      >
        {title} &nbsp;({items.length}) <span>{isExpanded ? "⬆️" : "⬇️"}</span>
      </div>
      {isExpanded && <AccordianItem items={items} />}
    </div>
  );
}
