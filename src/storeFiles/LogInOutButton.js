import React from "react";
import LogInButton from "./LogInButton";
import LogoutButton from "./LogoutButton";

function LogInOutButton(props) {
    const isLoggedIn = props.isLoggedIn
    if (isLoggedIn) {
        return <LogoutButton />
    }
    else {
        return <LogInButton />
    }
}

export default LogInOutButton