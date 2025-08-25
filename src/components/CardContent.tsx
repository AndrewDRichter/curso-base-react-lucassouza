import React from "react";

interface ICardContentProps {
    children: React.ReactNode
}

export function CardContent({ children }: ICardContentProps) {
    return (
        <>
            {children}
        </>
    )
}