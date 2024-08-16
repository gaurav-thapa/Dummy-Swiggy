import Item from "./item";

export default function AccordianItem ({items}) {
    return <>
    <ul>
    {items.map((item)=><li key={item.card.info.id}>
        <Item key={'item'+item.card.info.id} info={item.card.info}/>
    </li>)}
    </ul>
    
    </>
}