import React from 'react'
import { FaArrowCircleLeft } from "react-icons/fa";

const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 text-primary text-3xl ${className}`} onClick={onClick} >
            <FaArrowCircleLeft/>
        </div>
    )
}

export default PrevArrow