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
  const [loader, setLoader] = useState(false);

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

  useEffect(() => {
    items.length === 0 ? document.title = "Товары отсутствуют" : document.title = items.length + " товаров";
  }, [items])

  function handleAddItem(e) {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({
        name: name,
        desc: desc,
      })
    };

    if (name && desc) {
      setItems([...items, { id: id, name: name, desc: desc }]);
      setLoader(true);
      fetch("https://covid-shop-mcs.herokuapp.com", requestOptions)
      .then(response => response.json())
      .then((data) => {
        if (data && !data.error) {
          console.log(data)
        }
      })
      .catch(error => console.error(error))
      .finally(() => setLoader(false))
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
      <div className="
        pt-[5px] 
        w-[100vw] 
        m-[10px]
        ">
        <AddItem items={items} name={name} desc={desc} valid={valid} onAddItem={handleAddItem} onNameChange={handleNameChange} onDescChange={handleDescChange} loader={loader}/>
        
        <div>
          {items.length === 0 && (
            <p className="m-[10px] text-base">Добавьте первый товар</p>
          )}
        </div>
        <ItemsList items={items} onDeleteItem={handleDeleteItem} />
      </div>
    </>
  );
}