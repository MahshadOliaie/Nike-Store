import { useEffect, useState } from "react"
import HomePage from "./components/HomePage/HomePage"
import Starter from "./components/Starter/Starter"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import FavoritePage from "./components/FavoritePage/FavoritePage"
import FavoriteItems from "./context/favoriteItem/FavoriteItem"
import ProductDetail from "./components/ProductDetail/ProductDetail"
import CartPage from "./components/CartPage/CartPage"
import Cart from "./context/Cart/Cart"



function App() {
  // const [isFirstTime, setIsFirstTime] = useState(localStorage.getItem("isFirstTime") || "true")
  const [favoriteItems, setFavoriteItems] = useState(JSON.parse(localStorage.getItem("favoriteItems")) || [])
  const [carts , setCarts] = useState(JSON.parse(localStorage.getItem("carts")) || [])


  // function isFirstTimeSetter() {
  //   localStorage.setItem("isFirstTime", "false")
  //   setIsFirstTime(localStorage.getItem("isFirstTime"))
  // }

  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems))
    localStorage.setItem("carts", JSON.stringify(carts))

  }, [favoriteItems , carts])

  return (
    <>
      {
        // (isFirstTime == "true") ? <Starter onClick={isFirstTimeSetter} /> :
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
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                </Routes>
              </BrowserRouter>
            </Cart.Provider>
          </FavoriteItems.Provider>

      }

    </>
  )
}

export default App
