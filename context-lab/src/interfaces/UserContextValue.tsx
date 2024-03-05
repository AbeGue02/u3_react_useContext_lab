import UserInterface from "./UserInterface";

interface UserContextValue {
    user: UserInterface
    setUser: React.Dispatch<React.SetStateAction<UserInterface>>
}

export default UserContextValue