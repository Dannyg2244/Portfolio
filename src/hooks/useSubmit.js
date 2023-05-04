import React from "react"
import { useUser } from "../context/alertContext";


export  const Submit = () => {
    const {theme, toggleTheme} = useUser()
    return (
        <label>
            <input
            type="checkbox"
            checked={theme==="light"}
            onChange={toggleTheme}
            />
        </label>
    )
}