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
    <div>
      <div className="ml-[10px]">
        <h2 className="text-lg">{info.name}</h2>
        <p>{info.desc}</p>
      </div>
      <div className="
        flex items-center
        mb-[50px]
      ">
        <ItemButton children="-" disabled={total === 0} onClick={handleRemoveClick}/>
        <h3 className="text-base">{total ? total : ""}</h3>
        <ItemButton children="+" onClick={handleAddClick}/>
      </div>
    </div>
  );
}