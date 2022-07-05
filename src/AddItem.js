import React from "react";
import UIButton from "./UIButton";

export default function AddItems(props) {

    return (
        <>
        <form onSubmit={props.onAddItem}>
        <div>
          <label htmlFor="item-name" className="m-[10px] text-base">Введите товар:</label>
          <input
            id="item-name"
            type="text"
            placeholder="Название товара"
            className="
              py-[12px] px-[10px]
              m-[10px]
              rounded-[3px]
              border border-solid border-lightGrey
              text-base
            "
            value={props.name}
            onChange={props.onNameChange}
          />
        </div>
        <div>
          <label htmlFor="item-desc" className="m-[10px] text-base">Введите описание:</label>
          <input
            id="item-desc"
            type="text"
            placeholder="Описание товара"
            className="
              py-[12px] px-[10px]
              m-[10px]
              rounded-[3px]
              border border-solid border-lightGrey
              text-base
            "
            value={props.desc}
            onChange={props.onDescChange}
          />
        <div>
          {!props.valid && (
            <p className="m-[10px] text-base">Заполните все поля</p>
          )}
          <UIButton value="Добавить"/>
          </div>
        </div>
        </form>
        </>)
}