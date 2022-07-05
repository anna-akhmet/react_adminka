import React, { useState } from "react";
import ItemButton from "./ItemButton";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div className="item">
      <div className="item-info">
        <h2 className="item-title">{info.name}</h2>
        <p className="item-desc">{info.desc}</p>
      </div>
      <div className="item-quantity">
        <ItemButton children="-" disabled={total === 0} onClick={handleRemoveClick}/>
        <h3 className="item-total">{total ? total : ""}</h3>
        <ItemButton children="+" onClick={handleAddClick}/>
      </div>
    </div>
  );
}