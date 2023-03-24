import React from 'react'

interface ChildProps {
    color: string;
    onClick: () => void
    children ?: {}
}


export function Child({ color   , onClick}: ChildProps) {
    return (
        <div>{color}
        
        <button onClick={onClick}>Click me</button>
        </div>
    )
}

