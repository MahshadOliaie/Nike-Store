import { createContext } from "react";


const FavoriteItems = createContext({
    favoriteItems : [],
    setFavoriteItems : ()=>{}
}
)

export default FavoriteItems