import { createContext, useContext, useState} from "react";

const UserContext = createContext(undefined)

export const UserProvider = ({children}) => {
    const [user] = useState({
        name: "John",
        email : "ikuyajolugbenga@gmail.com",
        dob : "24/12/2000",
    })
    return <UserContext.Provider value={ user }></UserContext.Provider>
}

export const useUser = () => useContext(UserContext)