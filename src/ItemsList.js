import React from "react";
import Item from "./Item.js";

export default function ItemsList(props) {

  const itemsToRender = props.items.map((item, index) => {
    return (
      <ul className="ui-list">
        <li className="ui-item-list" key={props.items[index].id} id={props.items[index].id}>
          <Item info={props.items[index]} />
          <button className="item-button" onClick={props.onDeleteItem}>
            Удалить
          </button>
        </li>
      </ul>
    );
  });

  return itemsToRender;
}