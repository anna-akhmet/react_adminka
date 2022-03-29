import React, { useState } from "react";
import ItemsList from "./ItemsList.js";
import uuid from "react-uuid";

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
      <form onSubmit={handleAddItem}>
        <div>
          <label htmlFor="item-name">Введите товар:</label>
          <input
            id="item-name"
            type="text"
            placeholder="Название товара"
            className="ui-textfield"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="item-desc">Введите описание:</label>
          <input
            id="item-desc"
            type="text"
            placeholder="Описание товара"
            className="ui-textfield"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="form-footer">
          {(!name || !desc) && (
            <div className="validation">Заполните все поля</div>
          )}
          <input type="submit" className="ui-button" value="Добавить" />
        </div>
      </form>

      <div>
        {items.length === 0 && (
          <p className="ui-title">Добавьте первый товар</p>
        )}
      </div>

      <ul className="ui-list"><ItemsList items={items} onDeleteItem={handleDeleteItem}/></ul>
    </>
  );
}