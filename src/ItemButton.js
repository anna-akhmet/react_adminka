import React from "react";

export default function ItemButton({children, onClick, disabled}) {
    
    return (
        <button className="
            bg-white
            text-black text-base
            border border-lightGrey rounded-[3px]
            py-[5px] px-[20px]
            mx-[10px]
            min-w-[50px]
            cursor-pointer
            shadow-base
            duration-200 ease-out
            active:translate-y-px active:shadow-none
            hover:opacity-80
            disabled:cursor-none disabled:opacity-40
        " 
        onClick={onClick}
        disabled={disabled}>
            {children}
        </button>
    )
}
