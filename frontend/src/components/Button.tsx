import React from "react"

export const Button = ({onClick, children }: {onClick: ()=> void, children: React.ReactNode }) => {
    return <button onClick={onClick} className="px-8 py-4 text-2xl bg-chessboard-dark
    hover:bg-chessboard-hoverDark text-white
    font-bold rounded">
       {children}
    </button>
}