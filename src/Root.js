import React from "react";
import { useUser } from "./context/alertContext";

export const Root = () => {
    const [theme] = useUser()
    return (
        <div
        style={{
            backgroundColor: theme === "light" ? "white" : "black"
        }}
        >

        </div>
    )
}