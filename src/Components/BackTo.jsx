import React from 'react'
import backIcon from "../assets/Image/back-button.png"

export default function BackTo({ backTo, className, title }) {
    return (
        <button className={`flex items-center pt-5 hover:text-[#ffc300] group ${className}`} onClick={() => backTo()}  >
            <img src={backIcon} alt="backTo" className='size-7 group-hover:bg-[#ffc300] rounded-full' />
            {title ? <h5 className='pl-3 font-axiforma font-semibold'>{title}</h5> : null}
        </button>
    )
}
