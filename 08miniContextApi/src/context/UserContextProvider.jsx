import React, { Children } from "react";
import UserContext from "./UserContext";


// provider component , wrap up app with this 
const UserContextProvider = ({children})=>{
    const [user, setUser] = React.useState(null);
    // we can pass anything in value prop  any variable or function or object whatever , we pass object here because for convinient we pass any number of props in one object and can access easily in consumer component
    return(
        <UserContext.Provider value={{user, setUser}}> 
        {children}
        </UserContext.Provider>
    )
}


export default UserContextProvider;