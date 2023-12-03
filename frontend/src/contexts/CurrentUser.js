import { createContext, useState } from "react";


export const CurrentUser = createContext(null)
__
function CurrentUserProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {

        const getLoggedInUser = async () => {
            let response = await fetch('http://localhost:5000/authentication/profile')
            let user = await response.json()
            setCurrentUser(user)
        }
        getLoggedInUser()
    }, [])
  
}

function CurrentUserProvider({ children }){

    const [currentUser, setCurrentUser] = useState(null)
    

    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}
 
export default CurrentUserProvider