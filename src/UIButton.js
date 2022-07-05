import React from "react";

export default function UIButton({value, disabled}) {

    return (
        <input 
            type="submit" 
            className="
                bg-blue
                text-white text-base
                border-0 rounded-[3px]
                py-[15px] px-[20px]
                m-[10px]
                min-w-[150px]
                cursor-pointer
                shadow-base
                duration-200 ease-out
                hover:opacity-80
                active:translate-y-px active:shadow-none
                disabled:cursor-none disabled:opacity-40
            " 
            value={value}
            disabled={disabled}
        />
    )

}
