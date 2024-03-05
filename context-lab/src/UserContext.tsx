import { createContext } from "react";
import UserContextValue from "./interfaces/UserContextValue";

const UserContext = createContext<UserContextValue>({
    user: {username: '', password: '', lastLogIn: 0},
    setUser: () => {}
})

export default UserContext
