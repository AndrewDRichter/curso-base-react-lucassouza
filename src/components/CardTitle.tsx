import React from "react";

interface ICardTitleProps {
    children: React.ReactNode;
}

export function CardTitle({ children }: ICardTitleProps) {
    return (
        <div style={{ margin: '0px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {children}
        </div>
    )
}