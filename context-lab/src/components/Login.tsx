import { useContext, useState } from "react"
import UserContext from "../UserContext"
import UserInterface from "../interfaces/UserInterface"
import UserContextValue from "../interfaces/UserContextValue"

export default function Login() {
    
    const { setUser } = useContext<UserContextValue>(UserContext)
    const [ formUser, setFormUser ] = useState<UserInterface>({
        username: '',
        password: '',
        lastLogIn: 0
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormUser({ ...formUser, [event.target.id]: event.target.value });
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setUser({...formUser, lastLogIn: Date.now()})
        setFormUser({
            username: '',
            password: '',
            lastLogIn: 0
        });
    };


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
                id="username"
                type="text"
                onChange={handleChange}
                value={formUser.username}
            />
            <label htmlFor="password">Password:</label>
            <input
                id="password"
                type="password"
                onChange={handleChange}
                value={formUser.password}
            />
            <button type="submit">Login</button>
        </form>
    )
}