import React, { useState } from "react";

interface ICardProps {
    children: React.ReactNode;
}
export function Card({ children }: ICardProps) {
    const [isHover, setIsHover] = useState(false);
    const cardStyle = {
        border: "solid 1px",
        padding: '0px 10px',
        borderRadius: "5px",
        transition: 'all 1.7s',
        cursor: isHover ? 'pointer' : 'none',
        width: '500px',
    }

    function handleMouseEnter() {
        setIsHover(true);
    }

    function handleMouseLeave() {
        setIsHover(false);
    }

    return (
        <div
            className="card"
            style={cardStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    )
}