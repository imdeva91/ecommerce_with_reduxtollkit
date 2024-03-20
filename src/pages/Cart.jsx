import React from 'react'
import {RxCross1} from "react-icons/rx"
import { useSelector } from 'react-redux'
import CartProduct from '../components/CartProduct'

const Cart = ({setShowCart}) => {
    const products = useSelector((state)=>state.cart)
    console.log(products)
    

    const getTotal =()=>{
let total =0;
products.forEach((item)=>(total= total + item.price ))
return total
    }
    
  return (
    <div className=" w-full  sticky left-0 top-0 z-20 ">
        <div className="max-w-[400px] w-full min-h-full bg-white  absolute right-0 top-0 p-5">
            <RxCross1 className="absolute right-0 top-0 mt-6 text-[24px] cursor-pointer" onClick={()=>setShowCart(false)} />

            <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">Your Cart</h3>

            <div className="mt-6 space-y-2">
                {products.map((item)=>{
                    console.log(item)
                    return(
                        <CartProduct 
                        title={item.title}  image={item.image} price={item.price} quantity={item.quantity}  id={item.id} key={item.id} 
                        />
                    )
                })}
            </div>

            <div className="flex justify-between items-center font-medium text-xl py-4">
                <p>Total:</p>
                <p>${getTotal()}</p>
            </div>

            <button className="bg-black text-white text-center w-full rounded-3xl py-2 hover:bg-accent mb-4 mt-4">
                View Cart
            </button>


            <button className="bg-black text-white text-center w-full rounded-3xl py-2 hover:bg-accent ">
                CheckOut
            </button>
        </div>
    
        
    </div>
  )
}

export default Cart