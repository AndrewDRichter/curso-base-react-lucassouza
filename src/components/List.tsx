import React from "react"


export const List = ({ children }: React.PropsWithChildren) => {

    return (
        <ol style={{ justifyContent: 'center', alignItems: 'center', listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            {children}
        </ol>
    )
}