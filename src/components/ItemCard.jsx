import React from 'react'
import {AiFillStar,AiOutlineStar,AiOutlineShoppingCart} from "react-icons/ai";


const ItemCard = ({title,image,price,rating,category,addProductToCart,item}) => {

 
  return (
    <div className="border border-gray-200">
        <div className="text-center border-b border-gray-200">
            <img className="inline-block h-52" src={image} alt=""  />
        </div>

        <div className="px-8 py-4">
            <p className="taxt-gray-500 text-[14px] font-medium">{category}</p>
            <h2 className="font-medium">{title.slice(1,15)}...</h2>

            <div className="mt-3 flex text-[#ffb21d]">

                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiOutlineStar/>
                <p className="text-gray-600 text-[14px] ml-2">{rating}</p>
            </div>


            <div className="flex justify-between items-center mt-4">
              <h2 className="font-medium text-accent text-xl">${price}</h2>

              <div className="flex gap-2 items-center bg-pink text-white px-4 py-2 cursor-pointer hover:bg-accent" onClick={()=>addProductToCart(item)}>
              <AiOutlineShoppingCart /> Add to Cart

              </div>
                
              
            </div>
        </div>
    </div>
  )
}

export default ItemCard