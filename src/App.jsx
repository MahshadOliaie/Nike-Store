import { useEffect, useState } from "react"
import HomePage from "./components/HomePage/HomePage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import FavoritePage from "./components/FavoritePage/FavoritePage"
import FavoriteItems from "./context/favoriteItem/FavoriteItem"
import ProductDetail from "./components/ProductDetail/ProductDetail"
import CartPage from "./components/CartPage/CartPage"
import Cart from "./context/Cart/Cart"
import ProductsPage from "./components/ProductsPage/ProductsPage"
import LoginState from "./context/LoginState/LoginState"



function App() {
  const [favoriteItems, setFavoriteItems] = useState(JSON.parse(localStorage.getItem("favoriteItems")) || [])
  const [carts, setCarts] = useState(JSON.parse(localStorage.getItem("carts")) || [])
  const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("isLoggedIn")) || false)

  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems))
    localStorage.setItem("carts", JSON.stringify(carts))

  }, [favoriteItems, carts])

  return (
    <>
      {
        <LoginState.Provider value={{
          isLoggedIn,
          setIsLoggedIn
        }}>
          <FavoriteItems.Provider value={{
            favoriteItems,
            setFavoriteItems
          }}>
            <Cart.Provider value={{
              carts,
              setCarts
            }}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/favorite" element={<FavoritePage />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                </Routes>
              </BrowserRouter>
            </Cart.Provider>
          </FavoriteItems.Provider>
        </LoginState.Provider>

      }

    </>
  )
}

export default App
