import React from "react";

import "./Restart.css"

export const Restart = ({resetBoard}) => {
    return (
        <button className="restart-btn" onClick={resetBoard}>Restart
        </button>
    )
}