import React from "react";

export default function ItemButton({children, onDeleteItem}) {
    
    return (
        <button className="item-button" onClick={onDeleteItem}>
            {children}
        </button>
    )
}

// finish button props 