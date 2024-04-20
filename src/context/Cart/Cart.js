import { createContext } from "react";


const Cart = createContext({
    carts: [],
    setCarts: () => { }
})

export default Cart