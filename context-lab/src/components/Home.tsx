import { useContext } from "react"
import UserContextValue from "../interfaces/UserContextValue"
import UserContext from "../UserContext"

export default function Home() {
    
    const {user} = useContext<UserContextValue>(UserContext)
    
    return (
        <div>
            {
                user.lastLogIn 
                ? (
                    <h3>Welcome back, {user.username}</h3>
                ) : (
                    <h3>Please log in</h3>
                )
            }
        </div>
    )
}