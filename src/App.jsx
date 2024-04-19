import { useEffect, useState } from "react"
import HomePage from "./components/HomePage/HomePage"
import Starter from "./components/Starter/Starter"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import FavoritePage from "./components/FavoritePage/FavoritePage"
import FavoriteItems from "./context/favoriteItem/FavoriteItem"
import ProductDetail from "./components/ProductDetail/ProductDetail"



function App() {
  const [isFirstTime, setIsFirstTime] = useState(localStorage.getItem("isFirstTime") || "true")
  const [favoriteItems, setFavoriteItems] = useState(JSON.parse(localStorage.getItem("favoriteItems")) || [])

  function isFirstTimeSetter() {
    localStorage.setItem("isFirstTime", "false")
    setIsFirstTime(localStorage.getItem("isFirstTime"))
  }

  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems))
  }, [favoriteItems])

  return (
    <>
      {
        (isFirstTime == "true") ? <Starter onClick={isFirstTimeSetter} /> :
          <FavoriteItems.Provider value={{
            favoriteItems,
            setFavoriteItems
          }}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/favorite" element={<FavoritePage />} />
                <Route path="/product/:id" element={<ProductDetail />} />
              </Routes>
            </BrowserRouter>
          </FavoriteItems.Provider>

      }

    </>
  )
}

export default App
