import React, { Children } from "react";
import UserContext from "./UserContext";


// provider component , wrap up app with this 
const UserContextProvider = ({children})=>{
    const [user, setUser] = React.useState(null);
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}


export default UserContextProvider;