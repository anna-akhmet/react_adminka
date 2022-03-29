import React, { useState } from "react";
import ItemsList from "./ItemsList.js";
import uuid from "react-uuid";
import AddItem from "./AddItem.js";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const id = uuid();
  console.log(items);

  function handleAddItem(e) {
    e.preventDefault();
    if (name && desc) {
      setItems([...items, { id: id, name: name, desc: desc }]);
      setName("");
      setDesc("");
    }
  }

  function handleDeleteItem(e) {
    setItems(items.filter((item) => item.id !== e.target.parentElement.id));
  }


  return (
    <>
      <AddItem name={name} desc={desc} setName={setName} setDesc={setDesc} onAddItem={handleAddItem} />

      <div>
        {items.length === 0 && (
          <p className="ui-title">Добавьте первый товар</p>
        )}
      </div>

      <ItemsList items={items} onDeleteItem={handleDeleteItem} />
    </>
  );
}