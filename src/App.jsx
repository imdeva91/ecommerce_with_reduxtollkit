
import { Provider } from "react-redux"
import store from "./redux/store"
import { useState } from "react"
import Navbar from "./components/Navbar"
import Cart from "./pages/Cart"
import Hero from "./components/Hero"
import Features from "./components/Features"
import TrendingProducts from "./components/TrendingProducts"
import { Toaster } from "react-hot-toast"
import Footer from "./components/Footer"

function App() {
  const [showCart,setShowCart] = useState(false)

  return (
    <>
    <Provider store={store}>
    <Navbar setShowCart={setShowCart} />
    {showCart && <Cart setShowCart={setShowCart}/>}
    <Hero/>
  <Features/>
  <TrendingProducts/>
  <Toaster/>
  <Footer/>
  </Provider>
      </>
  )
}

export default App