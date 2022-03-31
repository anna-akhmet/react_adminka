import React from "react";

export default function AddItems(props) {

    return (
        <>
        <form onSubmit={props.onAddItem}>
        <div>
          <label htmlFor="item-name">Введите товар:</label>
          <input
            id="item-name"
            type="text"
            placeholder="Название товара"
            className="ui-textfield"
            value={props.name}
            onChange={props.onNameChange}
          />
        </div>
        <div>
          <label htmlFor="item-desc">Введите описание:</label>
          <input
            id="item-desc"
            type="text"
            placeholder="Описание товара"
            className="ui-textfield"
            value={props.desc}
            onChange={props.onDescChange}
          />
        <div className="form-footer">
          {!props.valid && (
            <div className="validation">Заполните все поля</div>
          )}
          <input type="submit" className="ui-button" value="Добавить" />
          </div>
        </div>
        </form>
        </>)
}