import React from 'react'
import Features from "../components/Features"
import ProductCart from "../components/ProductCart"
import Hero from "../components/Hero"
import { Toaster } from 'react-hot-toast'


const Home = () => {
  return (
    <div>
  <Hero/>
  <Features/>
  <ProductCart/>
  <Toaster/>
    </div>
  )
}

export default Home