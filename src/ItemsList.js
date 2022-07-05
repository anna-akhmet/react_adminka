import React from "react";
import Item from "./Item.js";
import ItemButton from "./ItemButton.js";

export default function ItemsList(props) {

  const itemsToRender = props.items.map((item, index) => {
    return (
      <ul className="m-[10px]">
        <li className="mb-[80px] m-[10px]" key={props.items[index].id} id={props.items[index].id}>
          <Item info={props.items[index]} />
          <ItemButton children="Удалить" onClick={props.onDeleteItem}/>
        </li>
      </ul>
    );
  });

  return itemsToRender;
}