import { createContext } from "react";


const LoginState = createContext({
    isLoggedIn: Boolean,
    setIsLoggedIn: () => { }
})

export default LoginState