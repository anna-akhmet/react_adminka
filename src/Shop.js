import React, { useEffect, useState } from "react";
import ItemsList from "./ItemsList.js";
import uuid from "react-uuid";
import AddItem from "./AddItem.js";

export default function Shop() {
  const [items, setItems] = useState(() => {
  const value = localStorage.getItem("items");
  if (!value) {
    return [];
  }
  return JSON.parse(value);
});
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [valid, setValid] = useState(false);

  const id = uuid();

  useEffect(() => {
    if (!name || !desc) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [name, desc]);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items])

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

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescChange(e) {
    setDesc(e.target.value);
  }



  return (
    <>
      <AddItem items={items} name={name} desc={desc} valid={valid} onAddItem={handleAddItem} onNameChange={handleNameChange} onDescChange={handleDescChange} />

    <div>
      {items.length === 0 && (
        <p className="ui-title">Добавьте первый товар</p>
      )}
    </div>

      <ItemsList items={items} onDeleteItem={handleDeleteItem} />
    </>
  );
}