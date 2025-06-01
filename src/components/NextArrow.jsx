import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";

const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`absolute top-1/2 right-5 -translate-y-1/2 text-primary text-3xl ${className}`} onClick={onClick} >
            <FaArrowCircleRight/>
        </div>
    )
}

export default NextArrow